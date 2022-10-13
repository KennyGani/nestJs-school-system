import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StudentManagement } from '../../models';
import { StudentManagementRepository } from '../../repositories/student-management.repository';
import { CreateStudent } from '../create-student.command';
export declare class CreateStudentHandler implements ICommandHandler<CreateStudent, StudentManagement> {
    private readonly repository;
    private readonly publisher;
    constructor(repository: StudentManagementRepository, publisher: EventPublisher);
    execute(command: CreateStudent): Promise<StudentManagement>;
}
