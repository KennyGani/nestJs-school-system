import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { TeacherDataModel, TeacherDocument } from './teacher.schema';

@Injectable()
export class TeacherRepository {
    constructor(
        @InjectModel(TeacherDataModel.name)
        private readonly teacherModel: Model<TeacherDocument>,
    ) {}

    public async findOne(
        teacherKey: string,
    ): Promise<TeacherDocument | undefined> {
        return await this.teacherModel.findOne({ key: teacherKey }).exec();
    }

    public async findAllTeachers(): Promise<TeacherDocument[]> {
        return await this.teacherModel.find().exec();
    }
}
