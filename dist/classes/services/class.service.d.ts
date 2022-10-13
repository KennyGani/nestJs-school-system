import { Class } from '../models';
import { ClassesRepository } from '../repositories';
export declare class ClassService {
    private readonly classRepository;
    constructor(classRepository: ClassesRepository);
    getClassByKey(classKey: string): Promise<Class>;
}
