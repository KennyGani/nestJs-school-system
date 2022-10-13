import { StudentClass } from '../models';
import { StudentClassRepository } from '../repositories';
export declare class StudentClassService {
    private readonly classRepository;
    constructor(classRepository: StudentClassRepository);
    getStudentClassByStudentKey(studentKey: string): Promise<StudentClass>;
}
