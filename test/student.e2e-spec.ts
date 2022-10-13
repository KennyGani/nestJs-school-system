/* eslint-disable jest/no-focused-tests */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { delay, of } from 'rxjs';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';
import {
    StudentCreatedEvent,
    StudentDeletedEvent,
    StudentUpdatedEvent,
} from '../src/entry-modules/managements/student-management/events';
import { GenderType } from '../src/entry-modules/students/enums';
import { Student } from '../src/entry-modules/students/models';
import { MockMongoDB } from './helpers/mongo-db.mock';

describe('StudentController (e2e)', () => {
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

    describe('/student/:studentKey (GET)', () => {
        describe('Not Found (404)', () => {
            // eslint-disable-next-line jest/expect-expect
            it('should throw error when the student not found', async () => {
                await request(app.getHttpServer())
                    .get('/student/student-123')
                    .expect(404);
            });
        });

        describe('Ok (200)', () => {
            it('should only return student from defined student key', async () => {
                await mongodb.student.create(
                    'key-123',
                    'fname-123',
                    'lname-123',
                    'email-123',
                    GenderType.Female,
                    'address-123',
                    '2022-09-09',
                    'atomic-hero',
                );

                const result = await request(app.getHttpServer())
                    .get('/student/key-123')
                    .expect(200);

                const dtoOutput = result.body as Student;
                expect(dtoOutput).toStrictEqual({
                    key: 'key-123',
                    firstName: 'fname-123',
                    lastName: 'lname-123',
                    email: 'email-123',
                    gender: 'female',
                    address: 'address-123',
                    dob: '2022-09-09',
                    classKey: 'atomic-hero',
                });
            });
        });
    });

    describe('/student (GET)', () => {
        describe('Bad Request (400)', () => {
            // eslint-disable-next-line jest/expect-expect
            it('should throw error when the class key is empty', async () => {
                await request(app.getHttpServer()).get('/student').expect(400);
            });
        });

        describe('Not Found (404)', () => {
            // eslint-disable-next-line jest/expect-expect
            it('should throw error when the student is 0', async () => {
                await request(app.getHttpServer())
                    .get('/student')
                    .query({ classKey: 'class-123' })
                    .expect(404);
            });
        });

        describe('Ok (200)', () => {
            it.each([
                'atomic-hero',
                ' Atomic-Hero',
                'atoMic-Hero ',
                'ATOMIC-HERO ',
            ])(
                'should only return all students from defined class key',
                async (classKey) => {
                    await mongodb.student.create(
                        'key-123',
                        'fname-123',
                        'lname-123',
                        'email-123',
                        GenderType.Female,
                        'address-123',
                        '2022-09-09',
                        'atomic-hero',
                    );
                    await mongodb.student.create(
                        'key-456',
                        'fname-456',
                        'lname-456',
                        'email-456',
                        GenderType.Male,
                        'address-456',
                        '2023-10-10',
                        'atomic-hero',
                    );
                    await mongodb.student.create(
                        'key-101112',
                        'fname-101112',
                        'lname-101112',
                        'email-101112',
                        GenderType.Male,
                        'address-101112',
                        '2025-12-12',
                        'saitama',
                    );
                    await mongodb.student.create(
                        'key-789',
                        'fname-789',
                        'lname-789',
                        'email-789',
                        GenderType.Female,
                        'address-789',
                        '2024-11-11',
                        'atomic-hero',
                    );

                    const result = await request(app.getHttpServer())
                        .get('/student')
                        .query({ classKey: classKey })
                        .expect(200);

                    const dtoOutputs = result.body as Student[];
                    expect(dtoOutputs.length).toBe(3);
                    expect(dtoOutputs[0]).toStrictEqual({
                        key: 'key-123',
                        firstName: 'fname-123',
                        lastName: 'lname-123',
                        email: 'email-123',
                        gender: 'female',
                        address: 'address-123',
                        dob: '2022-09-09',
                        classKey: 'atomic-hero',
                    });
                    expect(dtoOutputs[1]).toStrictEqual({
                        key: 'key-456',
                        firstName: 'fname-456',
                        lastName: 'lname-456',
                        email: 'email-456',
                        gender: 'male',
                        address: 'address-456',
                        dob: '2023-10-10',
                        classKey: 'atomic-hero',
                    });
                    expect(dtoOutputs[2]).toStrictEqual({
                        key: 'key-789',
                        firstName: 'fname-789',
                        lastName: 'lname-789',
                        email: 'email-789',
                        gender: 'female',
                        address: 'address-789',
                        dob: '2024-11-11',
                        classKey: 'atomic-hero',
                    });
                },
            );
        });
    });

    describe('StudentCreatedEvent', () => {
        it('should create the data', async () => {
            eventBus.publish(
                new StudentCreatedEvent(
                    'key-12345',
                    'firstName-12345',
                    'lastName-12345',
                    'email@gmail.com',
                    GenderType.Female,
                    'address-12345',
                    '2002-09-09',
                    'classKey-123',
                ),
            );

            await of(true).pipe(delay(2000)).toPromise();

            const students = await mongodb.student.getAll();

            expect(students[0]).toStrictEqual(
                expect.objectContaining({
                    key: 'key-12345',
                    firstName: 'firstName-12345',
                    lastName: 'lastName-12345',
                    email: 'email@gmail.com',
                    gender: 'female',
                    address: 'address-12345',
                    dob: '2002-09-09',
                    classKey: 'classKey-123',
                }),
            );
        });
    });

    describe('StudentUpdatedEvent', () => {
        it('should update the data', async () => {
            await mongodb.student.create(
                'key-123',
                'fname-123sss',
                'lname-123sss',
                'email-123sss@gmail,com',
                GenderType.Male,
                'address-123sss',
                '1010-10-10',
                'atomic-hero',
            );

            eventBus.publish(
                new StudentUpdatedEvent(
                    'key-123',
                    'key-12345',
                    'firstName-12345',
                    'lastName-12345',
                    'email@gmail.com',
                    GenderType.Female,
                    'address-12345',
                    '2002-09-09',
                    'classKey-123',
                ),
            );

            await of(true).pipe(delay(2000)).toPromise();

            const students = await mongodb.student.getAll();

            expect(students[0]).toStrictEqual(
                expect.objectContaining({
                    key: 'key-12345',
                    firstName: 'firstName-12345',
                    lastName: 'lastName-12345',
                    email: 'email@gmail.com',
                    gender: 'female',
                    address: 'address-12345',
                    dob: '2002-09-09',
                    classKey: 'classKey-123',
                }),
            );
        });
    });

    describe.only('StudentDeletedEvent', () => {
        it('should delete the data', async () => {
            await mongodb.student.create(
                'key-123',
                'fname-123sss',
                'lname-123sss',
                'email-123sss@gmail,com',
                GenderType.Male,
                'address-123sss',
                '1010-10-10',
                'atomic-hero',
            );

            eventBus.publish(new StudentDeletedEvent('key-123'));

            await of(true).pipe(delay(2000)).toPromise();

            const students = await mongodb.student.getAll();

            expect(students.length).toBe(0);
        });
    });
});
