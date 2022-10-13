import { GenderType } from '../enums';

export interface Student {
    key: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: GenderType;
    address: string;
    dob: string;
    classKey?: string;
}
