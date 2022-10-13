import { Controller, Post, Put, Get, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('teacher-management')
@Controller('teacher-management')
export class TeacherManagementController {
    @Post()
    public createTeacher(): string {
        return 'teacher created';
    }

    @Put('/:teacherId')
    public updateTeacher(@Param('teacherId') teacherId: string): string {
        return `This action update teacher with id = #${teacherId}`;
    }

    @Get('/:teacherId')
    public getTeacherWithId(@Param('teacherId') teacherId: string): string {
        return `This action get teacher with id = #${teacherId}`;
    }

    @Get()
    public getAllTeacher(): string {
        return `This action get all teacher`;
    }

    @Delete('/:teacherId')
    public deleteTeacherWithId(@Param('teacherId') teacherId: string): string {
        return `This action delete teacher with id = #${teacherId}`;
    }
}
