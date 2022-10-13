import { StudentClassDtoOutput } from './dtos';
import { StudentClassService } from './services';
export declare class StudentClassController {
    private readonly service;
    constructor(service: StudentClassService);
    getStudentClass(studentKey: string): Promise<StudentClassDtoOutput>;
    requestChangeClass(): string;
}
