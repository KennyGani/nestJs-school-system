import { BadRequestException } from '@nestjs/common';
export declare class StudentNotExistException extends BadRequestException {
    constructor(key: string);
}
