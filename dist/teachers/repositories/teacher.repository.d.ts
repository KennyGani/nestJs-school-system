import { Model } from 'mongoose';
import { TeacherDocument } from './teacher.schema';
export declare class TeachersRepository {
    private teacherModel;
    constructor(teacherModel: Model<TeacherDocument>);
    findOne(teacherKey: string): Promise<TeacherDocument | undefined>;
}
