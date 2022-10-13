import { GenderType } from '../../enums';
export declare class UpdateStudentDtoInput {
    currentKey: string;
    newKey: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: GenderType;
    address: string;
    dob: string;
    classKey?: string;
}
