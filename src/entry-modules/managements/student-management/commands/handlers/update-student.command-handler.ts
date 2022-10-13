import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { StudentAggregate } from '../../aggregates/student-management.aggregate';
import { StudentManagement } from '../../models';
import { StudentManagementRepository } from '../../repositories/student-management.repository';
import { UpdateStudentCommand } from '../update-student.command';

@CommandHandler(UpdateStudentCommand)
export class UpdateStudentCommandHandler
    implements ICommandHandler<UpdateStudentCommand, StudentManagement>
{
    constructor(
        private readonly repository: StudentManagementRepository,
        private readonly eventPublisher: EventPublisher,
    ) {}

    public async execute(
        command: UpdateStudentCommand,
    ): Promise<StudentManagement> {
        const oldStudentData = await this.repository.findStudentByKey(
            command.currentKey,
        );

        let studentNewKey: string;

        if (command.newKey) {
            studentNewKey = command.newKey;
        } else {
            studentNewKey = command.currentKey;
        }

        const studentNewFirstName =
            command.firstName == oldStudentData.firstName || undefined || ''
                ? oldStudentData.firstName
                : command.firstName;

        const studentNewLastName =
            command.lastName == oldStudentData.lastName || undefined || ''
                ? oldStudentData.lastName
                : command.lastName;

        const studentNewEmail =
            command.email == oldStudentData.email || undefined || ''
                ? oldStudentData.email
                : command.email;

        const studentNewGender =
            command.gender == oldStudentData.gender || undefined || ''
                ? oldStudentData.gender
                : command.gender;

        const studentNewAddress =
            command.address == oldStudentData.address || undefined || ''
                ? oldStudentData.address
                : command.address;

        const studentNewDob =
            command.dob == oldStudentData.dob || undefined || ''
                ? oldStudentData.dob
                : command.dob;

        const studentNewClassKey =
            command.classKey == oldStudentData.classKey || undefined || ''
                ? oldStudentData.classKey
                : command.classKey;

        const studentAggregate = StudentAggregate.updateAndConfigure(
            command.currentKey,
            studentNewKey,
            studentNewFirstName,
            studentNewLastName,
            studentNewEmail,
            studentNewGender,
            studentNewAddress,
            studentNewDob,
            studentNewClassKey,
            oldStudentData.createdAt,
            this.eventPublisher,
        );

        await this.repository.updateStudentAndCommitEvent(
            command.currentKey,
            studentAggregate,
        );

        return;
    }
}
