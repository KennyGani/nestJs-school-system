import { BaseEvent } from '../../../../modules/share.module';

export class StudentDeletedEvent extends BaseEvent {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    public static EVENT_NAME = StudentDeletedEvent.name;

    constructor(public readonly key: string) {
        super(StudentDeletedEvent.EVENT_NAME);
    }
}
