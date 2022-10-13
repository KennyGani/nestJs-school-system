import { StudentDtoOutput } from './dtos';
import { StudentService } from './services';
export declare class StudentController {
    private readonly service;
    constructor(service: StudentService);
    getStudent(studentKey: string): Promise<StudentDtoOutput>;
}
