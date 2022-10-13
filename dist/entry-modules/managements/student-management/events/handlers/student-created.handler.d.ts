import { IEventHandler } from '@nestjs/cqrs';
import { StudentCreatedEvent } from '../student-created.event';
export declare class StudentCreatedHandler implements IEventHandler<StudentCreatedEvent> {
    handle(event: StudentCreatedEvent): void;
}
