import { Injectable } from '@nestjs/common';

import { TeacherNotFoundException } from '../exceptions';
import { Teacher } from '../models';
import { TeacherRepository } from '../repositories';

@Injectable()
export class TeacherService {
    constructor(private readonly teacherRepository: TeacherRepository) {}

    public async getTeacherByKey(teacherKey: string): Promise<Teacher> {
        const teacher = await this.teacherRepository.findOne(teacherKey);

        if (!teacher) {
            throw new TeacherNotFoundException(
                `Teacher with key ${teacherKey} does not exist`,
            );
        }

        return {
            address: teacher.address,
            dob: teacher.dob,
            email: teacher.email,
            gender: teacher.gender,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            key: teacher.key,
            classKey: teacher.classKey,
        };
    }

    /**
     * Get all teachers
     * @throws {TeacherNotFoundException} If teachers < 0, this error will be thrown
     */
    public async getAllTeachers(): Promise<Teacher[]> {
        const teachers = await this.teacherRepository.findAllTeachers();

        if (teachers.length <= 0) {
            throw new TeacherNotFoundException(`no teacher found`);
        }

        return teachers.map((teacher) => ({
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            address: teacher.address,
            dob: teacher.dob,
            email: teacher.email,
            gender: teacher.gender,
            key: teacher.key,
            classKey: teacher.classKey,
        }));
    }
}
