import { Model } from 'mongoose';
import { GenderType } from '../enums';
import { StudentDocument } from './student.schema';
export declare class StudentRepository {
    private readonly studentModel;
    constructor(studentModel: Model<StudentDocument>);
    findOne(studentKey: string): Promise<StudentDocument | undefined>;
    findAllStudentsForClass(classKey: string): Promise<StudentDocument[]>;
    createStudent(key: string, firstName: string, lastName: string, email: string, gender: GenderType, address: string, dob: string, classKey: string): Promise<StudentDocument | undefined>;
    updateStudent(currentKey: string, newKey: string, firstName: string, lastName: string, email: string, gender: GenderType, address: string, dob: string, classKey: string): Promise<void>;
}
