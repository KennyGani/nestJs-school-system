import { NotFoundException } from '@nestjs/common';
export declare class StudentNotFoundException extends NotFoundException {
    constructor(studentKey: string);
}
