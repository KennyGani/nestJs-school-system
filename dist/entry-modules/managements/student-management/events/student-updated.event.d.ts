import { BaseEvent } from '../../../../modules/share.module';
import { GenderType } from '../enums';
export declare class StudentUpdatedEvent extends BaseEvent {
    readonly currentKey: string;
    readonly newKey: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly gender: GenderType;
    readonly address: string;
    readonly dob: string;
    readonly classKey: string;
    static EVENT_NAME: string;
    constructor(currentKey: string, newKey: string, firstName: string, lastName: string, email: string, gender: GenderType, address: string, dob: string, classKey: string);
}
