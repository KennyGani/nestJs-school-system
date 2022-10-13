import { ClassRepository } from '../repositories';
export declare class ClassProxyService {
    private readonly classesRepository;
    constructor(classesRepository: ClassRepository);
    doesClassExist(classKey: string): Promise<boolean>;
}
