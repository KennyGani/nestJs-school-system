import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';

import { StudentCreatedEvent } from '../../../managements/student-management/events';
import { StudentManagement } from '../../../managements/student-management/models';
import { StudentRepository } from '../../repositories';

@EventsHandler(StudentCreatedEvent)
export class StudentCreatedEventHandler
    implements IEventHandler<StudentCreatedEvent>
{
    constructor(private readonly studentRepository: StudentRepository) {}

    public async handle(
        event: StudentCreatedEvent,
    ): Promise<StudentManagement> {
        await this.studentRepository.createStudent(
            event.key,
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
