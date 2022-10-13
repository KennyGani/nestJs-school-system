import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import { ClassCollection } from './class-collection.mock';
import { StudentCollection } from './student-collection.mock';
import { StudentManagementCollection } from './student-management-collection.mock';
import { TeacherCollection } from './teacher-collection.mock';

export class MockMongoDB {
    private mongodb?: MongoMemoryServer;
    private mongooseConnection?: mongoose.Connection;
    private studentCollection?: StudentCollection;
    private teacherCollection?: TeacherCollection;
    private classCollection?: ClassCollection;
    private studentManagementCollection?: StudentManagementCollection;

    public async start(): Promise<void> {
        this.mongodb = await MongoMemoryServer.create();
        const uri = this.getConnString();

        await mongoose.connect(uri);

        this.mongooseConnection = mongoose.connection;
        this.studentCollection = new StudentCollection();
        this.teacherCollection = new TeacherCollection();
        this.classCollection = new ClassCollection();
        this.studentManagementCollection = new StudentManagementCollection();
    }

    public get student(): StudentCollection {
        if (!this.studentCollection) {
            throw new Error('MongoDB is not initialized');
        }

        return this.studentCollection;
    }

    public get teacher(): TeacherCollection {
        if (!this.teacherCollection) {
            throw new Error('MongoDB is not initialized');
        }

        return this.teacherCollection;
    }

    public get class(): ClassCollection {
        if (!this.classCollection) {
            throw new Error('MongoDB is not initialized');
        }

        return this.classCollection;
    }

    public get studentManagement(): StudentManagementCollection {
        if (!this.studentManagementCollection) {
            throw new Error('MongoDB is not initialized');
        }

        return this.studentManagementCollection;
    }

    public async stop(): Promise<void> {
        await this.mongooseConnection?.close();
        await this.mongodb?.stop();
    }

    public getConnString(): string {
        if (!this.mongodb) {
            throw new Error('MongoDB is not initialized');
        }

        return this.mongodb.getUri();
    }
}
