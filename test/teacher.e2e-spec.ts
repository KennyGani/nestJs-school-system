/* eslint-disable jest/expect-expect */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';
import { GenderType } from '../src/entry-modules/teachers/enums';
import { Teacher } from '../src/entry-modules/teachers/models';
import { MockMongoDB } from './helpers/mongo-db.mock';

describe('TeacherController (e2e)', () => {
    let app: INestApplication;
    let mongodb: MockMongoDB;
    let moduleFixture: TestingModule;

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

        app = moduleFixture.createNestApplication();
        app.useGlobalPipes(new ValidationPipe());
        await app.init();
    });

    afterEach(async () => {
        await app.close();
        await moduleFixture.close();
        await mongodb.stop();
    });

    describe('/teacher (GET)', () => {
        describe('Not Found (404)', () => {
            it('should throw error when the teacher is 0', async () => {
                await request(app.getHttpServer()).get('/teacher').expect(404);
            });
        });

        describe('Ok (200)', () => {
            it('should return all teachers', async () => {
                await mongodb.teacher.create(
                    'key-123',
                    'fname-123',
                    'lname-123',
                    'email-123',
                    GenderType.Female,
                    'address-123',
                    new Date('2022-09-09'),
                    'atomic-hero',
                );
                await mongodb.teacher.create(
                    'key-456',
                    'fname-456',
                    'lname-456',
                    'email-456',
                    GenderType.Male,
                    'address-456',
                    new Date('2023-10-10'),
                    'atomic-hero',
                );
                await mongodb.teacher.create(
                    'key-789',
                    'fname-789',
                    'lname-789',
                    'email-789',
                    GenderType.Female,
                    'address-789',
                    new Date('2024-11-11'),
                    'atomic-hero',
                );

                const result = await request(app.getHttpServer())
                    .get('/teacher')
                    .expect(200);

                const dtoOutputs = result.body as Teacher[];
                expect(dtoOutputs.length).toBe(3);
                expect(dtoOutputs[0]).toStrictEqual({
                    key: 'key-123',
                    firstName: 'fname-123',
                    lastName: 'lname-123',
                    email: 'email-123',
                    gender: 'female',
                    address: 'address-123',
                    dob: '2022-09-09T00:00:00.000Z',
                    classKey: 'atomic-hero',
                });
                expect(dtoOutputs[1]).toStrictEqual({
                    key: 'key-456',
                    firstName: 'fname-456',
                    lastName: 'lname-456',
                    email: 'email-456',
                    gender: 'male',
                    address: 'address-456',
                    dob: '2023-10-10T00:00:00.000Z',
                    classKey: 'atomic-hero',
                });
                expect(dtoOutputs[2]).toStrictEqual({
                    key: 'key-789',
                    firstName: 'fname-789',
                    lastName: 'lname-789',
                    email: 'email-789',
                    gender: 'female',
                    address: 'address-789',
                    dob: '2024-11-11T00:00:00.000Z',
                    classKey: 'atomic-hero',
                });
            });
        });
    });

    describe('/teacher/:teacherKey (GET)', () => {
        describe('Not Found (404)', () => {
            it('should throw error when the teacher not found', async () => {
                await request(app.getHttpServer())
                    .get('/teacher/teacher-123')
                    .expect(404);
            });
        });

        describe('Ok (200)', () => {
            it('should only return teacher from defined teacher key', async () => {
                await mongodb.teacher.create(
                    'key-123',
                    'fname-123',
                    'lname-123',
                    'email-123',
                    GenderType.Female,
                    'address-123',
                    new Date('2022-09-09'),
                    'saitama-hero',
                );

                const result = await request(app.getHttpServer())
                    .get('/teacher/key-123')
                    .expect(200);

                const dtoOutputs = result.body as Teacher;
                expect(dtoOutputs).toStrictEqual({
                    key: 'key-123',
                    firstName: 'fname-123',
                    lastName: 'lname-123',
                    email: 'email-123',
                    gender: 'female',
                    address: 'address-123',
                    dob: '2022-09-09T00:00:00.000Z',
                    classKey: 'saitama-hero',
                });
            });
        });
    });
});
