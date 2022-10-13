import { Teacher } from '../models';
import { TeachersRepository } from '../repositories';
export declare class TeacherService {
    private readonly teacherRepository;
    constructor(teacherRepository: TeachersRepository);
    getTeacherByKey(teacherKey: string): Promise<Teacher>;
}
