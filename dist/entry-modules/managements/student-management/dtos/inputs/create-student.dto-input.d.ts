import { GenderType } from '../../enums';
export declare class CreateStudentDtoInput {
    key: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: GenderType;
    address: string;
    dob: string;
    classKey?: string;
}
