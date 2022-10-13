import { NotFoundException } from '@nestjs/common';

export class TeacherNotFoundException extends NotFoundException {
    constructor(teacherKey: string) {
        super(teacherKey);

        this.name = TeacherNotFoundException.name;
    }
}
