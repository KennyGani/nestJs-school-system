import { ClassDtoOutput } from './dtos';
import { ClassService } from './services';
export declare class ClassController {
    private readonly service;
    constructor(service: ClassService);
    getClass(classKey: string): Promise<ClassDtoOutput>;
}
