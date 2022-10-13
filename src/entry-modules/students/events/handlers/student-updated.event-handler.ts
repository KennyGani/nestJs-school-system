import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';

import { StudentUpdatedEvent } from '../../../managements/student-management/events';
import { StudentManagement } from '../../../managements/student-management/models';
import { StudentRepository } from '../../repositories';

@EventsHandler(StudentUpdatedEvent)
export class StudentUpdatedEventHandler
    implements IEventHandler<StudentUpdatedEvent>
{
    constructor(private readonly studentRepository: StudentRepository) {}

    public async handle(
        event: StudentUpdatedEvent,
    ): Promise<StudentManagement> {
        await this.studentRepository.updateStudent(
            event.currentKey,
            event.newKey,
            event.firstName,
            event.lastName,
            event.email,
            event.gender,
            event.address,
            event.dob,
            event.classKey,
        );

        return;
    }
}
