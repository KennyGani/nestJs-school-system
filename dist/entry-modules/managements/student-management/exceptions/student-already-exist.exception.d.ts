import { BadRequestException } from '@nestjs/common';
export declare class StudentAlreadyExistException extends BadRequestException {
    constructor(key: string);
}
