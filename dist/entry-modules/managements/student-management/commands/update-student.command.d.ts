import { GenderType } from '../enums';
export declare class UpdateStudentCommand {
    readonly currentKey: string;
    readonly newKey: string;
    readonly firstName: string;
    readonly lastName: string | undefined;
    readonly email: string;
    readonly gender: GenderType;
    readonly address: string;
    readonly dob: string;
    readonly classKey: string | undefined;
    constructor(currentKey: string, newKey: string, firstName: string, lastName: string | undefined, email: string, gender: GenderType, address: string, dob: string, classKey: string | undefined);
}
