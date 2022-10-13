import { Module } from '@nestjs/common';
import { TeacherManagementController } from './teacher-management.controller';

@Module({
    controllers: [TeacherManagementController],
})
export class TeacherManagementModule {}
