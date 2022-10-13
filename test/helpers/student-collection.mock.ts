import mongoose from 'mongoose';

import { GenderType } from '../../src/entry-modules/students/enums';
import { Student } from '../../src/entry-modules/students/models';
import { StudentDocument, StudentSchema } from '../../src/entry-modules/students/repositories';

export class StudentCollection {
    private readonly studentModel: mongoose.Model<StudentDocument, unknown>;

    constructor() {
        this.studentModel = mongoose.model<StudentDocument>(
            'student',
            StudentSchema,
        );
    }

    public async create(
        key: string,
        firstName: string,
        lastName: string,
        email: string,
        gender: GenderType,
        address: string,
        dob: string,
        classKey: string,
    ): Promise<Student> {
        return await this.studentModel.create({
            key: key,
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            address: address,
            dob: dob,
            classKey: classKey,
        });
    }

    public async getAll(): Promise<Student[]> {
        return await this.studentModel.find();
    }
}
