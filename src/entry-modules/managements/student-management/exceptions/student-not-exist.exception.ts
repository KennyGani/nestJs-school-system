import { BadRequestException } from '@nestjs/common';

export class StudentNotExistException extends BadRequestException {
    constructor(key: string) {
        super(key);

        this.name = StudentNotExistException.name;
    }
}
