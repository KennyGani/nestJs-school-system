import { StudentCreatedEventHandler } from './student-created.event-handler';
import { StudentDeletedEventHandler } from './student-deleted.event-handler';
import { StudentUpdatedEventHandler } from './student-updated.event-handler';

export const EventHandlers = [
    StudentCreatedEventHandler,
    StudentUpdatedEventHandler,
    StudentDeletedEventHandler,
];
