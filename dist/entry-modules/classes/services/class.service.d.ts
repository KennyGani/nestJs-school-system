import { Class } from '../models';
import { ClassRepository } from '../repositories';
export declare class ClassService {
    private readonly classRepository;
    constructor(classRepository: ClassRepository);
    getClassByKey(classKey: string): Promise<Class>;
}
