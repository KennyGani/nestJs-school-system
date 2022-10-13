import { GenderType } from '../../enums';
export declare class StudentDtoOutput {
    key: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: GenderType;
    address: string;
    dob: Date;
}
