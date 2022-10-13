import { Injectable } from '@nestjs/common';

import { Student } from '../models';
import { StudentRepository } from '../repositories';

@Injectable()
export class StudentProxyService {
    constructor(private readonly studentRepository: StudentRepository) {}

    public async getStudentByKey(
        studentKey: string,
    ): Promise<Student | undefined> {
        return await this.studentRepository.findOne(studentKey);
    }
}
