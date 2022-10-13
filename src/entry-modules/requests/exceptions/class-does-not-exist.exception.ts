import { BadRequestException } from '@nestjs/common';

export class ClassDoesNotExistException extends BadRequestException {
    constructor(classKey: string) {
        super(classKey);

        this.name = ClassDoesNotExistException.name;
    }
}
