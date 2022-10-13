import { Model } from 'mongoose';
import { StudentAggregate } from '../aggregates/student-management.aggregate';
import { StudentManagementDocument } from './student-management.schema';
export declare class StudentManagementRepository {
    private readonly studentManagementModel;
    constructor(studentManagementModel: Model<StudentManagementDocument>);
    createStudentAndCommitEvent(studentAggregate: StudentAggregate): Promise<StudentManagementDocument | undefined>;
    findStudentByKey(key: string): Promise<StudentManagementDocument | undefined>;
    updateStudentAndCommitEvent(currentKey: string, studentAggregate: StudentAggregate): Promise<void>;
    deleteStudentAndCommitEvent(studentAggregate: StudentAggregate): Promise<void>;
}
