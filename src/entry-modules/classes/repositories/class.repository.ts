import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClassDataModel, ClassDocument } from './class.schema';

@Injectable()
export class ClassRepository {
    constructor(
        @InjectModel(ClassDataModel.name)
        private readonly classModel: Model<ClassDocument>,
    ) {}

    public async findOne(classKey: string): Promise<ClassDocument | undefined> {
        return await this.classModel.findOne({ key: classKey }).exec();
    }
}
