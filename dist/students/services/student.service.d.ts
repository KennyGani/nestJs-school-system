import { Student } from '../models';
import { StudentsRepository } from '../repositories';
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentsRepository);
    getStudentByKey(studentKey: string): Promise<Student>;
}
