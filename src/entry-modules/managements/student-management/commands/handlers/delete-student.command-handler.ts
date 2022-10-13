import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { StudentAggregate } from '../../aggregates/student-management.aggregate';
import { StudentNotExistException } from '../../exceptions';
import { StudentManagement } from '../../models';
import { StudentManagementRepository } from '../../repositories/student-management.repository';
import { DeleteStudentCommand } from '../delete-student.command';

@CommandHandler(DeleteStudentCommand)
export class DeleteStudentCommandHandler
    implements ICommandHandler<DeleteStudentCommand>
{
    constructor(
        private readonly repository: StudentManagementRepository,
        private readonly eventPublisher: EventPublisher,
    ) {}

    public async execute(
        command: DeleteStudentCommand,
    ): Promise<StudentManagement> {
        const student = await this.repository.findStudentByKey(command.key);

        if (!student) {
            throw new StudentNotExistException(command.key);
        }

        const studentAggregate = StudentAggregate.deleteAndConfigure(
            command.key,
            student.firstName,
            student.lastName,
            student.email,
            student.gender,
            student.address,
            student.dob,
            student.classKey,
            student.createdAt,
            student.updatedAt,
            this.eventPublisher,
        );

        await this.repository.deleteStudentAndCommitEvent(studentAggregate);

        return studentAggregate;
    }
}
