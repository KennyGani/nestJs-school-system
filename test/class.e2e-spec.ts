import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';
import { Class } from '../src/entry-modules/classes/models';
import { MockMongoDB } from './helpers/mongo-db.mock';

describe('ClassController (e2e)', () => {
    let app: INestApplication;
    let mongodb: MockMongoDB;
    let moduleFixture: TestingModule;

    beforeEach(async () => {
        mongodb = new MockMongoDB();

        await mongodb.start();

        const connectionString = mongodb.getConnString();

        process.env = {
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

    describe('/class/:classKey (GET)', () => {
        describe('Not Found (404)', () => {
            it('should throw error when the class not found', async () => {
                await request(app.getHttpServer())
                    .get('/class/class-123')
                    .expect(404);
            });
        });

        describe('Ok (200)', () => {
            it('should only return class from defined class key', async () => {
                await mongodb.class.create('key-123', 'name-123');

                const result = await request(app.getHttpServer())
                    .get('/class/key-123')
                    .expect(200);

                const dtoOutput = result.body as Class;
                expect(dtoOutput).toStrictEqual({
                    key: 'key-123',
                    name: 'name-123',
                });
            });
        });
    });
});
