import { Student } from '../models';
import { StudentRepository } from '../repositories';
export declare class StudentProxyService {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    getStudentByKey(studentKey: string): Promise<Student | undefined>;
}
