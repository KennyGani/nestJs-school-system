import { GenderType } from '../enums';
export interface StudentManagement {
    key: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: GenderType;
    address: string;
    dob: string;
    classKey?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
