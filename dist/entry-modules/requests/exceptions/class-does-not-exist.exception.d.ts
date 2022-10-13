import { BadRequestException } from '@nestjs/common';
export declare class ClassDoesNotExistException extends BadRequestException {
    constructor(classKey: string);
}
