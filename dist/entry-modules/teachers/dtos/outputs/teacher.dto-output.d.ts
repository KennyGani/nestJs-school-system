import { GenderType } from '../../enums';
export declare class TeacherDtoOutput {
    key: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: GenderType;
    address: string;
    dob: Date;
    classKey?: string;
}
