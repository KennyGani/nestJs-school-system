import { Teacher } from '../models';
import { TeacherRepository } from '../repositories';
export declare class TeacherProxyService {
    private readonly teacherRepository;
    constructor(teacherRepository: TeacherRepository);
    getTeacherByKey(teacherKey: string): Promise<Teacher | undefined>;
}
