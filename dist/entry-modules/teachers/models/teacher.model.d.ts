import { GenderType } from '../enums';
export interface Teacher {
    key: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: GenderType;
    address: string;
    dob: Date;
    classKey?: string;
}
