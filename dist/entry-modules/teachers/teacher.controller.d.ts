import { TeacherDtoOutput } from './dtos';
import { TeacherService } from './services';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    getAllTeachers(): Promise<TeacherDtoOutput[]>;
    getTeacher(teacherKey: string): Promise<TeacherDtoOutput>;
}
