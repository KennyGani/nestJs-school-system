import { BadRequestException } from '@nestjs/common';

export class CurrentClassDoesNotMatchWithActualClassException extends BadRequestException {
    constructor(classKey: string) {
        super(classKey);

        this.name = CurrentClassDoesNotMatchWithActualClassException.name;
    }
}
