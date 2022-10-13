import { Model } from 'mongoose';
import { ClassDocument } from './class.schema';
export declare class ClassesRepository {
    private classModel;
    constructor(classModel: Model<ClassDocument>);
    findOne(classKey: string): Promise<ClassDocument | undefined>;
}
