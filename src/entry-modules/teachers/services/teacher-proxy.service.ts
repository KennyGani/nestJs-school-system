import { Injectable } from '@nestjs/common';

import { Teacher } from '../models';
import { TeacherRepository } from '../repositories';

@Injectable()
export class TeacherProxyService {
    constructor(private readonly teacherRepository: TeacherRepository) {}

    public async getTeacherByKey(
        teacherKey: string,
    ): Promise<Teacher | undefined> {
        return await this.teacherRepository.findOne(teacherKey);
    }
}
