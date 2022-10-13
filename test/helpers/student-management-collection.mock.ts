import mongoose from 'mongoose';

import { GenderType } from '../../src/entry-modules/managements/student-management/enums/gender.enum';
import { StudentManagement } from '../../src/entry-modules/managements/student-management/models';
import {
    StudentManagementDocument,
    StudentManagementSchema,
} from '../../src/entry-modules/managements/student-management/repositories';

export class StudentManagementCollection {
    private readonly studentManagementModel: mongoose.Model<
        StudentManagementDocument,
        unknown
    >;

    constructor() {
        this.studentManagementModel = mongoose.model<StudentManagementDocument>(
            'student-management',
            StudentManagementSchema,
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
    ): Promise<StudentManagement> {
        return await this.studentManagementModel.create({
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

    public async getAll(): Promise<StudentManagement[]> {
        return await this.studentManagementModel.find();
    }
}
