import { BaseEvent } from '../../../../modules/share.module';
import { GenderType } from '../../../managements/student-management/enums';
export declare class StudentCreatedEvent extends BaseEvent {
    readonly key: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly gender: GenderType;
    readonly address: string;
    readonly dob: string;
    readonly classKey: string;
    static EVENT_NAME: string;
    constructor(key: string, firstName: string, lastName: string, email: string, gender: GenderType, address: string, dob: string, classKey: string);
}
