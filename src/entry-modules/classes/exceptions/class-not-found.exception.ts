import { NotFoundException } from '@nestjs/common';

export class ClassNotFoundException extends NotFoundException {
    constructor(classKey: string) {
        super(classKey);

        this.name = ClassNotFoundException.name;
    }
}
