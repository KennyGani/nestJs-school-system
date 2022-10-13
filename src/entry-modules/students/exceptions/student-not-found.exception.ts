import { NotFoundException } from '@nestjs/common';

export class StudentNotFoundException extends NotFoundException {
    constructor(studentKey: string) {
        super(studentKey);

        this.name = StudentNotFoundException.name;
    }
}
