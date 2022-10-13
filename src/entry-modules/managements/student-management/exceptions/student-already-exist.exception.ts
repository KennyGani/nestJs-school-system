import { BadRequestException } from '@nestjs/common';

export class StudentAlreadyExistException extends BadRequestException {
    constructor(key: string) {
        super(key);

        this.name = StudentAlreadyExistException.name;
    }
}
