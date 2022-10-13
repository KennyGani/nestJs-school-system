import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateStudentCommand, DeleteStudentCommand, UpdateStudentCommand } from './commands';
import { CreateStudentDtoInput, UpdateStudentDtoInput } from './dtos';

@ApiTags('student-management')
@Controller('student-management')
export class StudentManagementController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    @ApiBody({ type: CreateStudentDtoInput })
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    public async createStudent(
        @Body() createStudentManagement: CreateStudentDtoInput,
    ): Promise<void> {
        await this.commandBus.execute(
            new CreateStudentCommand(
                createStudentManagement.key,
                createStudentManagement.firstName,
                createStudentManagement.lastName,
                createStudentManagement.email,
                createStudentManagement.gender,
                createStudentManagement.address,
                createStudentManagement.dob,
                createStudentManagement.classKey,
            ),
        );
    }

    @Put()
    @ApiBody({ type: UpdateStudentDtoInput })
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    public async updateStudent(
        @Body() updateStudentManagement: UpdateStudentDtoInput,
    ): Promise<void> {
        return await this.commandBus.execute(
            new UpdateStudentCommand(
                updateStudentManagement.currentKey,
                updateStudentManagement.newKey,
                updateStudentManagement.firstName,
                updateStudentManagement.lastName,
                updateStudentManagement.email,
                updateStudentManagement.gender,
                updateStudentManagement.address,
                updateStudentManagement.dob,
                updateStudentManagement.classKey,
            ),
        );
    }

    @Delete('/:studentKey')
    @ApiCreatedResponse()
    @ApiBadRequestResponse()
    public async deleteStudentWithKey(
        @Param('studentKey') studentKey: string,
    ): Promise<void> {
        return await this.commandBus.execute(
            new DeleteStudentCommand(studentKey),
        );
    }

    // @Get('/:studentId')
    // public getStudentWithId(@Param('studentId') studentId: string): string {
    //     return `This action get student with id = #${studentId}`;
    // }

    // @Get('/class/:classKey')
    // public getAllStudentsForClass(@Param('classKey') classKey: string): string {
    //     return 'halo';
    // }

    // @Get()
    // public getAllStudents(): string {
    //     return `This action get all student`;
    // }
}
