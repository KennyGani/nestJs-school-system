import { TeacherDtoOutput } from './dtos';
import { TeacherService } from './services';
export declare class TeacherController {
    private readonly service;
    constructor(service: TeacherService);
    getTeacher(teacherKey: string): Promise<TeacherDtoOutput>;
}
