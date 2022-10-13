import { NotFoundException } from '@nestjs/common';
export declare class TeacherNotFoundException extends NotFoundException {
    constructor(teacherKey: string);
}
