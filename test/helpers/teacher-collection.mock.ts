import mongoose from 'mongoose';

import { GenderType } from '../../src/entry-modules/teachers/enums';
import { Teacher } from '../../src/entry-modules/teachers/models';
import { TeacherDocument, TeacherSchema } from '../../src/entry-modules/teachers/repositories';

export class TeacherCollection {
    private readonly teacherModel: mongoose.Model<TeacherDocument, unknown>;

    constructor() {
        this.teacherModel = mongoose.model<TeacherDocument>(
            'teacher',
            TeacherSchema,
        );
    }

    public async create(
        key: string,
        firstName: string,
        lastName: string,
        email: string,
        gender: GenderType,
        address: string,
        dob: Date,
        classKey: string,
    ): Promise<Teacher> {
        return await this.teacherModel.create({
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

    public async getAll(): Promise<Teacher[]> {
        return await this.teacherModel.find();
    }
}
