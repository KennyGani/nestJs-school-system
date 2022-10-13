import { BaseEvent } from '../../../../modules/share.module';
import { GenderType } from '../enums';

export class StudentUpdatedEvent extends BaseEvent {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static EVENT_NAME = StudentUpdatedEvent.name;

    constructor(
        public readonly currentKey: string,
        public readonly newKey: string,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly email: string,
        public readonly gender: GenderType,
        public readonly address: string,
        public readonly dob: string,
        public readonly classKey: string,
    ) {
        super(StudentUpdatedEvent.EVENT_NAME);
    }
}
