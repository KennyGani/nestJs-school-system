import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StudentManagement } from '../../models';
import { StudentManagementRepository } from '../../repositories/student-management.repository';
import { CreateStudentCommand } from '../create-student.command';
export declare class CreateStudentCommandHandler implements ICommandHandler<CreateStudentCommand> {
    private readonly repository;
    private readonly eventPublisher;
    constructor(repository: StudentManagementRepository, eventPublisher: EventPublisher);
    execute(command: CreateStudentCommand): Promise<StudentManagement>;
}
