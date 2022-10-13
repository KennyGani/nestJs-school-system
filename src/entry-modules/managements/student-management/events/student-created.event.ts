import { BaseEvent } from '../../../../modules/share.module';
import { GenderType } from '../../../managements/student-management/enums';

export class StudentCreatedEvent extends BaseEvent {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static EVENT_NAME = StudentCreatedEvent.name;

    constructor(
        public readonly key: string,
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly email: string,
        public readonly gender: GenderType,
        public readonly address: string,
        public readonly dob: string,
        public readonly classKey: string,
    ) {
        super(StudentCreatedEvent.EVENT_NAME);
    }
}
