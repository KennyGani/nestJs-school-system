import { Injectable } from '@nestjs/common';

import { ClassRepository } from '../repositories';

@Injectable()
export class ClassProxyService {
    constructor(private readonly classesRepository: ClassRepository) {}

    public async doesClassExist(classKey: string): Promise<boolean> {
        const classObject = await this.classesRepository.findOne(classKey);
        return !!classObject;
    }
}
