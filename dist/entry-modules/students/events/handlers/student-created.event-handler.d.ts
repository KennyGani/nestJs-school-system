import { IEventHandler } from '@nestjs/cqrs';
import { StudentCreatedEvent } from '../../../managements/student-management/events';
import { StudentManagement } from '../../../managements/student-management/models';
import { StudentRepository } from '../../repositories';
export declare class StudentCreatedEventHandler implements IEventHandler<StudentCreatedEvent> {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    handle(event: StudentCreatedEvent): Promise<StudentManagement>;
}
