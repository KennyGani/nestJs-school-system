import { INestApplication, ValidationPipe } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';
import { CreateStudentDtoInput, UpdateStudentDtoInput } from '../src/entry-modules/managements/student-management/dtos';
import {
    StudentCreatedEvent,
    StudentDeletedEvent,
    StudentUpdatedEvent,
} from '../src/entry-modules/managements/student-management/events';
import { GenderType } from '../src/entry-modules/students/enums';
import { BaseEvent } from '../src/modules/share.module';
import { MockMongoDB } from './helpers/mongo-db.mock';

describe('StudentManagementController (e2e)', () => {
    let app: INestApplication;
    let mongodb: MockMongoDB;
    let moduleFixture: TestingModule;
    let eventBus: EventBus;

    beforeEach(async () => {
        mongodb = new MockMongoDB();

        await mongodb.start();

        const connectionString = mongodb.getConnString();

        process.env = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            MONGODB_CONNECTION_STRING: connectionString,
        };

        moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        eventBus = await moduleFixture.resolve<EventBus>(EventBus);

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    afterEach(async () => {
        await app.close();
        await moduleFixture.close();
        await mongodb.stop();
    });

    // eslint-disable-next-line jest/no-focused-tests
    describe('/student-management (POST)', () => {
        describe('created (201)', () => {
            it('should send the exact value given', async () => {
                const createDtoInput = {
                    key: 'key',
                    firstName: 'firstName',
                    lastName: 'lastName',
                    email: 'email@gmail.com',
                    gender: GenderType.Female,
                    address: 'address-12345',
                    dob: '2022-08-09',
                    classKey: 'classKey',
                } as CreateStudentDtoInput;

                let expectedEvent: StudentCreatedEvent | undefined;
                eventBus.subscribe((event: BaseEvent) => {
                    if (event.eventName === StudentCreatedEvent.EVENT_NAME) {
                        expectedEvent = event as StudentCreatedEvent;
                    }
                });

                await request(app.getHttpServer())
                    .post('/student-management')
                    .send(createDtoInput)
                    .expect(201);

                const students = await mongodb.studentManagement.getAll();

                expect(students.length).toBe(1);
                expect(students[0]).toStrictEqual(
                    expect.objectContaining({
                        key: 'key',
                        firstName: 'firstName',
                        lastName: 'lastName',
                        email: 'email@gmail.com',
                        gender: 'female',
                        address: 'address-12345',
                        dob: '2022-08-09',
                        classKey: 'classKey',
                    }),
                );

                expect(expectedEvent).toBeTruthy();
                expect(expectedEvent.address).toStrictEqual(
                    createDtoInput.address,
                );
                expect(expectedEvent.classKey).toStrictEqual(
                    createDtoInput.classKey,
                );
                expect(expectedEvent.dob).toStrictEqual(createDtoInput.dob);
                expect(expectedEvent.email).toStrictEqual(createDtoInput.email);
                expect(expectedEvent.eventName).toStrictEqual(
                    StudentCreatedEvent.EVENT_NAME,
                );
                expect(expectedEvent.firstName).toStrictEqual(
                    createDtoInput.firstName,
                );
                expect(expectedEvent.lastName).toStrictEqual(
                    createDtoInput.lastName,
                );
                expect(expectedEvent.gender).toStrictEqual(
                    createDtoInput.gender,
                );
                expect(expectedEvent.key).toStrictEqual(createDtoInput.key);
            });
        });
    });

    // eslint-disable-next-line jest/no-focused-tests
    describe('/student-management (PUT)', () => {
        describe('updated (200)', () => {
            it('should send and update the student with value given', async () => {
                await mongodb.studentManagement.create(
                    'key-123',
                    'fname-123',
                    'lname-123',
                    'email-123',
                    GenderType.Female,
                    'address-123',
                    '2022-09-09',
                    'atomic-hero',
                );

                const updateDtoInput = {
                    currentKey: 'key-123',
                    newKey: 'newkey',
                    firstName: 'newfirstName',
                    lastName: 'newlastName',
                    email: 'newemail@gmail.com',
                    gender: GenderType.Male,
                    address: 'newaddress-12345',
                    dob: '2002-02-02',
                    classKey: 'newclassKey',
                } as UpdateStudentDtoInput;

                let expectedEvent: StudentUpdatedEvent | undefined;
                eventBus.subscribe((event: BaseEvent) => {
                    if (event.eventName === StudentUpdatedEvent.EVENT_NAME) {
                        expectedEvent = event as StudentUpdatedEvent;
                    }
                });

                await request(app.getHttpServer())
                    .put('/student-management')
                    .send(updateDtoInput)
                    .expect(200);

                const students = await mongodb.studentManagement.getAll();

                expect(students.length).toBe(1);
                expect(students[0]).toStrictEqual(
                    expect.objectContaining({
                        key: 'newkey',
                        firstName: 'newfirstName',
                        lastName: 'newlastName',
                        email: 'newemail@gmail.com',
                        gender: GenderType.Male,
                        address: 'newaddress-12345',
                        dob: '2002-02-02',
                        classKey: 'newclassKey',
                    }),
                );

                expect(expectedEvent).toBeTruthy();
                expect(expectedEvent.newKey).toStrictEqual(
                    updateDtoInput.newKey,
                );
                expect(expectedEvent.currentKey).toStrictEqual(
                    updateDtoInput.currentKey,
                );
                expect(expectedEvent.firstName).toStrictEqual(
                    updateDtoInput.firstName,
                );
                expect(expectedEvent.lastName).toStrictEqual(
                    updateDtoInput.lastName,
                );
                expect(expectedEvent.address).toStrictEqual(
                    updateDtoInput.address,
                );
                expect(expectedEvent.classKey).toStrictEqual(
                    updateDtoInput.classKey,
                );
                expect(expectedEvent.dob).toStrictEqual(updateDtoInput.dob);
                expect(expectedEvent.email).toStrictEqual(updateDtoInput.email);
                expect(expectedEvent.eventName).toStrictEqual(
                    StudentUpdatedEvent.EVENT_NAME,
                );
                expect(expectedEvent.gender).toStrictEqual(
                    updateDtoInput.gender,
                );
            });
        });
    });

    // eslint-disable-next-line jest/no-focused-tests
    describe('/student-management/:studentKey (DELETE)', () => {
        describe('deleted (200)', () => {
            it('should send and delete the student with the given key', async () => {
                await mongodb.studentManagement.create(
                    'key-123',
                    'fname-123',
                    'lname-123',
                    'email-123',
                    GenderType.Female,
                    'address-123',
                    '2022-09-09',
                    'atomic-hero',
                );

                let expectedEvent: StudentDeletedEvent | undefined;
                eventBus.subscribe((event: BaseEvent) => {
                    if (event.eventName === StudentDeletedEvent.EVENT_NAME) {
                        expectedEvent = event as StudentDeletedEvent;
                    }
                });

                await request(app.getHttpServer())
                    .delete('/student-management/key-123')
                    .expect(200);

                const students = await mongodb.studentManagement.getAll();

                expect(students.length).toBe(0);

                expect(expectedEvent).toBeTruthy();
                expect(expectedEvent.key).toStrictEqual('key-123');
            });
        });
    });
});
