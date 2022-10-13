import { IEventHandler } from '@nestjs/cqrs';
import { StudentUpdatedEvent } from '../../../managements/student-management/events';
import { StudentManagement } from '../../../managements/student-management/models';
import { StudentRepository } from '../../repositories';
export declare class StudentUpdatedEventHandler implements IEventHandler<StudentUpdatedEvent> {
    private readonly studentRepository;
    constructor(studentRepository: StudentRepository);
    handle(event: StudentUpdatedEvent): Promise<StudentManagement>;
}
