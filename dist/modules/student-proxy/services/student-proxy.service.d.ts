import { Student } from '../../../entry-modules/students/models';
import { StudentService } from '../../../entry-modules/students/services';
export declare class StudentProxyService {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudentByKey(studentKey: string): Promise<Student>;
    test(): void;
}
