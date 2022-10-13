import { AllStudentDtoInput, StudentDtoOutput } from './dtos';
import { StudentService } from './services';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAllStudentsForClass(dto: AllStudentDtoInput): Promise<StudentDtoOutput[]>;
    getStudent(studentKey: string): Promise<StudentDtoOutput>;
}
