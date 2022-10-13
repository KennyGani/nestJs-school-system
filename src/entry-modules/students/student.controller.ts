import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AllStudentDtoInput, StudentDtoOutput } from './dtos';
import { StudentService } from './services';

@ApiTags('student')
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get('/')
    @HttpCode(200)
    @ApiOkResponse({ type: StudentDtoOutput })
    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    public async getAllStudentsForClass(
        @Query() dto: AllStudentDtoInput,
    ): Promise<StudentDtoOutput[]> {
        const students = await this.studentService.getAllStudentsForClass(
            dto.classKey.trimStart().trimEnd().toLowerCase(),
        );

        return students.map((student) => ({
            firstName: student.firstName,
            lastName: student.lastName,
            address: student.address,
            dob: student.dob,
            email: student.email,
            gender: student.gender,
            key: student.key,
            classKey: student.classKey,
        }));
    }

    @Get('/:studentKey')
    @HttpCode(200)
    @ApiOkResponse({ type: StudentDtoOutput })
    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    public async getStudent(
        @Param('studentKey') studentKey: string,
    ): Promise<StudentDtoOutput> {
        const student = await this.studentService.getStudentByKey(studentKey);

        return {
            firstName: student.firstName,
            lastName: student.lastName,
            address: student.address,
            dob: student.dob,
            email: student.email,
            gender: student.gender,
            key: student.key,
            classKey: student.classKey,
        };
    }
}
