import { CommandBus } from '@nestjs/cqrs';
import { CreateStudentDtoInput, DeleteStudentDtoInput, UpdateStudentDtoInput } from './dtos';
export declare class StudentManagementController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    createStudent(createStudentManagement: CreateStudentDtoInput): Promise<void>;
    updateStudent(updateStudentManagement: UpdateStudentDtoInput): Promise<void>;
    deleteStudent(deleteStudentManagement: DeleteStudentDtoInput): Promise<void>;
    deleteStudentWithKey(studentKey: string): Promise<void>;
}
