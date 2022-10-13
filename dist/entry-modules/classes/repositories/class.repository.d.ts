import { Model } from 'mongoose';
import { ClassDocument } from './class.schema';
export declare class ClassRepository {
    private readonly classModel;
    constructor(classModel: Model<ClassDocument>);
    findOne(classKey: string): Promise<ClassDocument | undefined>;
}
