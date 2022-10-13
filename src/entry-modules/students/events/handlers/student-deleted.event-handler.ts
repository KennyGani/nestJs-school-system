import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';

import { StudentDeletedEvent } from '../../../managements/student-management/events';
import { StudentManagement } from '../../../managements/student-management/models';
import { StudentRepository } from '../../repositories';

@EventsHandler(StudentDeletedEvent)
export class StudentDeletedEventHandler
    implements IEventHandler<StudentDeletedEvent>
{
    constructor(private readonly studentRepository: StudentRepository) {}

    public async handle(
        event: StudentDeletedEvent,
    ): Promise<StudentManagement> {
        await this.studentRepository.deleteStudent(event.key);

        return;
    }
}
