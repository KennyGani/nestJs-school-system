import { NotFoundException } from '@nestjs/common';
export declare class ClassNotFoundException extends NotFoundException {
    constructor(classKey: string);
}
