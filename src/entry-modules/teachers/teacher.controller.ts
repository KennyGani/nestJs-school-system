import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { TeacherDtoOutput } from './dtos';
import { TeacherService } from './services';

@ApiTags('teacher')
@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}
    @Get('/')
    @HttpCode(200)
    @ApiOkResponse({ type: TeacherDtoOutput })
    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    public async getAllTeachers(): Promise<TeacherDtoOutput[]> {
        const teachers = await this.teacherService.getAllTeachers();

        return teachers.map((teacher) => ({
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            address: teacher.address,
            dob: teacher.dob,
            email: teacher.email,
            gender: teacher.gender,
            key: teacher.key,
            classKey: teacher.classKey,
        }));
    }

    @Get('/:teacherKey')
    @HttpCode(200)
    @ApiOkResponse({ type: TeacherDtoOutput })
    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    public async getTeacher(
        @Param('teacherKey') teacherKey: string,
    ): Promise<TeacherDtoOutput> {
        const teacher = await this.teacherService.getTeacherByKey(teacherKey);

        return {
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            address: teacher.address,
            dob: teacher.dob,
            email: teacher.email,
            gender: teacher.gender,
            key: teacher.key,
            classKey: teacher.classKey,
        };
    }
}
