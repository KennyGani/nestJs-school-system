import { BadRequestException } from '@nestjs/common';
export declare class StudentDoesNotExistException extends BadRequestException {
    constructor(studentKey: string);
}
