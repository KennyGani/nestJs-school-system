import { Injectable } from '@nestjs/common';

import { StudentNotFoundException } from '../exceptions';
import { Student } from '../models';
import { StudentRepository } from '../repositories';

@Injectable()
export class StudentService {
    constructor(private readonly studentRepository: StudentRepository) {}

    public async getStudentByKey(studentKey: string): Promise<Student> {
        const student = await this.studentRepository.findOne(studentKey);

        if (!student) {
            throw new StudentNotFoundException(
                `Student with key ${studentKey} does not found`,
            );
        }

        return {
            address: student.address,
            dob: student.dob,
            email: student.email,
            gender: student.gender,
            firstName: student.firstName,
            lastName: student.lastName,
            key: student.key,
            classKey: student.classKey,
        };
    }

    /**
     * Get all students from a specific class
     * @param classKey
     * @throws {StudentNotFoundException} If students < 0, this error will be thrown
     */
    public async getAllStudentsForClass(classKey: string): Promise<Student[]> {
        const students = await this.studentRepository.findAllStudentsForClass(
            classKey,
        );

        if (students.length <= 0) {
            throw new StudentNotFoundException(
                `no student in class with key ${classKey}`,
            );
        }

        return students.map((student) => ({
            firstName: student.firstName,
            lastName: student.lastName,
            address: student.address,
            dob: student.dob,
            email: student.email,
            gender: student.gender,
            key: student.key,
            classKey: student.classKey,
        }));
    }
}
