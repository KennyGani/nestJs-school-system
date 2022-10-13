import { Teacher } from '../models';
import { TeacherRepository } from '../repositories';
export declare class TeacherService {
    private readonly teacherRepository;
    constructor(teacherRepository: TeacherRepository);
    getTeacherByKey(teacherKey: string): Promise<Teacher>;
    getAllTeachers(): Promise<Teacher[]>;
}
