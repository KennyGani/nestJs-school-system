import { Model } from 'mongoose';
import { TeacherDocument } from './teacher.schema';
export declare class TeacherRepository {
    private readonly teacherModel;
    constructor(teacherModel: Model<TeacherDocument>);
    findOne(teacherKey: string): Promise<TeacherDocument | undefined>;
    findAllTeachers(): Promise<TeacherDocument[]>;
}
