import { Injectable } from '@nestjs/common';

import { ClassNotFoundException } from '../exceptions';
import { Class } from '../models';
import { ClassRepository } from '../repositories';

@Injectable()
export class ClassService {
    constructor(private readonly classRepository: ClassRepository) {}

    public async getClassByKey(classKey: string): Promise<Class> {
        const classObject = await this.classRepository.findOne(classKey);

        if (!classObject) {
            throw new ClassNotFoundException(
                `Class with key ${classKey} does not exist`,
            );
        }

        return {
            key: classObject.key,
            name: classObject.name,
        };
    }
}
