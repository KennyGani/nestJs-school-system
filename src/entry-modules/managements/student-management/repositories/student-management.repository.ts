import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { StudentAggregate } from '../aggregates/student-management.aggregate';
import { StudentManagementDataModel, StudentManagementDocument } from './student-management.schema';

@Injectable()
export class StudentManagementRepository {
    constructor(
        @InjectModel(StudentManagementDataModel.name)
        private readonly studentManagementModel: Model<StudentManagementDocument>,
    ) {}

    public async createStudentAndCommitEvent(
        studentAggregate: StudentAggregate,
    ): Promise<StudentManagementDocument | undefined> {
        const result = await this.studentManagementModel.create({
            key: studentAggregate.key,
            firstName: studentAggregate.firstName,
            lastName: studentAggregate.lastName,
            email: studentAggregate.email,
            gender: studentAggregate.gender,
            address: studentAggregate.address,
            dob: studentAggregate.dob,
            classKey: studentAggregate.classKey,
            createdAt: studentAggregate.createdAt,
            updatedAt: studentAggregate.updatedAt,
        });

        studentAggregate.commit();

        return result;
    }

    public async findStudentByKey(
        key: string,
    ): Promise<StudentManagementDocument | undefined> {
        return await this.studentManagementModel
            .findOne({
                key: key,
            })
            .exec();
    }

    public async updateStudentAndCommitEvent(
        currentKey: string,
        studentAggregate: StudentAggregate,
    ): Promise<void> {
        await this.studentManagementModel.updateOne(
            { key: currentKey },
            {
                $set: {
                    key: studentAggregate.key,
                    firstName: studentAggregate.firstName,
                    lastName: studentAggregate.lastName,
                    email: studentAggregate.email,
                    gender: studentAggregate.gender,
                    address: studentAggregate.address,
                    dob: studentAggregate.dob,
                    classKey: studentAggregate.classKey,
                    createdAt: studentAggregate.createdAt,
                    updatedAt: studentAggregate.updatedAt,
                },
            },
        );

        studentAggregate.commit();
    }

    public async deleteStudentAndCommitEvent(
        studentAggregate: StudentAggregate,
    ): Promise<void> {
        await this.studentManagementModel.deleteOne({
            key: studentAggregate.key,
        });

        studentAggregate.commit();
    }
}
