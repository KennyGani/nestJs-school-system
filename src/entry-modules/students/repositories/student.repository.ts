import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GenderType } from '../enums';
import { StudentDataModel, StudentDocument } from './student.schema';

@Injectable()
export class StudentRepository {
    constructor(
        @InjectModel(StudentDataModel.name)
        private readonly studentModel: Model<StudentDocument>,
    ) {}

    public async findOne(
        studentKey: string,
    ): Promise<StudentDocument | undefined> {
        return await this.studentModel.findOne({ key: studentKey }).exec();
    }

    public async findAllStudentsForClass(
        classKey: string,
    ): Promise<StudentDocument[]> {
        return await this.studentModel.find({ classKey: classKey }).exec();
    }

    public async createStudent(
        key: string,
        firstName: string,
        lastName: string,
        email: string,
        gender: GenderType,
        address: string,
        dob: string,
        classKey: string,
    ): Promise<StudentDocument | undefined> {
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

    public async updateStudent(
        currentKey: string,
        newKey: string,
        firstName: string,
        lastName: string,
        email: string,
        gender: GenderType,
        address: string,
        dob: string,
        classKey: string,
    ): Promise<void> {
        await this.studentModel.updateOne(
            { key: currentKey },
            {
                $set: {
                    key: newKey,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    gender: gender,
                    address: address,
                    dob: dob,
                    classKey: classKey,
                },
            },
        );
    }

    public async deleteStudent(key: string): Promise<void> {
        await this.studentModel.deleteOne({
            key: key,
        });
    }
}
