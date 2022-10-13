import { BadRequestException } from '@nestjs/common';
export declare class TeacherDoesNotExistException extends BadRequestException {
    constructor(teacherKey: string);
}
