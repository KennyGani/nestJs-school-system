import { CreateStudentCommandHandler } from './create-student.command-handler';
import { DeleteStudentCommandHandler } from './delete-student.command-handler';
import { UpdateStudentCommandHandler } from './update-student.command-handler';

export const CommandHandlers = [
    CreateStudentCommandHandler,
    UpdateStudentCommandHandler,
    DeleteStudentCommandHandler,
];
