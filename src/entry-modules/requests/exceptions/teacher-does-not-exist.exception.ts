import { BadRequestException } from '@nestjs/common';

export class TeacherDoesNotExistException extends BadRequestException {
    constructor(teacherKey: string) {
        super(teacherKey);

        this.name = TeacherDoesNotExistException.name;
    }
}
