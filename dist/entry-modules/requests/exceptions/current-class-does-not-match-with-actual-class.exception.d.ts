import { BadRequestException } from '@nestjs/common';
export declare class CurrentClassDoesNotMatchWithActualClassException extends BadRequestException {
    constructor(classKey: string);
}
