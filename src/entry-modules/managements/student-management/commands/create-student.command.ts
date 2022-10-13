import { GenderType } from '../enums';

export class CreateStudentCommand {
    constructor(
        public readonly key: string,
        public readonly firstName: string,
        public readonly lastName: string | undefined,
        public readonly email: string,
        public readonly gender: GenderType,
        public readonly address: string,
        public readonly dob: string,
        public readonly classKey: string | undefined,
    ) {}
}
