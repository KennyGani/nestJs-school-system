import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { StudentAggregate } from '../../aggregates/student-management.aggregate';
import { StudentAlreadyExistException } from '../../exceptions';
import { StudentManagement } from '../../models';
import { StudentManagementRepository } from '../../repositories/student-management.repository';
import { CreateStudentCommand } from '../create-student.command';

@CommandHandler(CreateStudentCommand)
export class CreateStudentCommandHandler
    implements ICommandHandler<CreateStudentCommand>
{
    constructor(
        private readonly repository: StudentManagementRepository,
        private readonly eventPublisher: EventPublisher,
    ) {}

    public async execute(
        command: CreateStudentCommand,
    ): Promise<StudentManagement> {
        const {
            key,
            firstName,
            lastName,
            email,
            gender,
            address,
            dob,
            classKey,
        } = command;

        const studentAlreadyExist = await this.repository.findStudentByKey(key);

        if (studentAlreadyExist) {
            throw new StudentAlreadyExistException(key);
        }

        const studentAggregate = StudentAggregate.createAndConfigure(
            key,
            firstName,
            lastName,
            email,
            gender,
            address,
            dob,
            classKey,
            this.eventPublisher,
        );

        await this.repository.createStudentAndCommitEvent(studentAggregate);

        return studentAggregate;
    }
}
