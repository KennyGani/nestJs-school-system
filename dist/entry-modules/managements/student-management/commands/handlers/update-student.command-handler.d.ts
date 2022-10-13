import { EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StudentManagement } from '../../models';
import { StudentManagementRepository } from '../../repositories/student-management.repository';
import { UpdateStudentCommand } from '../update-student.command';
export declare class UpdateStudentCommandHandler implements ICommandHandler<UpdateStudentCommand, StudentManagement> {
    private readonly repository;
    private readonly eventPublisher;
    constructor(repository: StudentManagementRepository, eventPublisher: EventPublisher);
    execute(command: UpdateStudentCommand): Promise<StudentManagement>;
}
