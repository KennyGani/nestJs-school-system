import { BadRequestException } from '@nestjs/common';

export class StudentDoesNotExistException extends BadRequestException {
    constructor(studentKey: string) {
        super(studentKey);

        this.name = StudentDoesNotExistException.name;
    }
}
