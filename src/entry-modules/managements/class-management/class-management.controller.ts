import { Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('class-management')
@Controller('class-management')
export class ClassManagementController {
    @Post()
    public createClass(): string {
        return 'class created';
    }

    @Put('/:classId')
    public updateClass(@Param('classId') classId: string): string {
        return `This action update class with id = #${classId}`;
    }

    @Get('/:classId')
    public getClassWithId(@Param('classId') classId: string): string {
        return `This action get class with id = #${classId}`;
    }

    @Get()
    public getAllClass(): string {
        return `This action get all class`;
    }

    @Delete('/:classId')
    public deleteClassWithId(@Param('classId') classId: string): string {
        return `This action delete class with id = #${classId}`;
    }
}
