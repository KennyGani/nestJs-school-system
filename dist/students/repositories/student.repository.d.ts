import { Model } from 'mongoose';
import { StudentDocument } from './student.schema';
export declare class StudentsRepository {
    private studentModel;
    constructor(studentModel: Model<StudentDocument>);
    findOne(studentKey: string): Promise<StudentDocument | undefined>;
}
