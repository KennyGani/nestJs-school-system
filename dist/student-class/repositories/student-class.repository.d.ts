import { Model } from 'mongoose';
import { StudentClassDocument } from './student-class.schema';
export declare class StudentClassRepository {
    private studentClassModel;
    constructor(studentClassModel: Model<StudentClassDocument>);
    findOneByStudentKey(studentKey: string): Promise<StudentClassDocument | undefined>;
}
