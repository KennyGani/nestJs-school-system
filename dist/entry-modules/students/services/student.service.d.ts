import { Student } from '../models';
import { StudentRepository } from '../repositories';
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    getStudentByKey(studentKey: string): Promise<Student>;
    getAllStudentsForClass(classKey: string): Promise<Student[]>;
}
