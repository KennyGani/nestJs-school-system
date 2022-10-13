import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StudentManagement } from '../../models';
import { StudentManagementRepository } from '../../repositories/student-management.repository';
import { DeleteStudentCommand } from '../delete-student.command';
export declare class DeleteStudentCommandHandler implements ICommandHandler<DeleteStudentCommand> {
    private readonly repository;
    private readonly eventPublisher;
    constructor(repository: StudentManagementRepository, eventPublisher: EventPublisher);
    execute(command: DeleteStudentCommand): Promise<StudentManagement>;
}
