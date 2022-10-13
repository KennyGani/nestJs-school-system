import { Module } from '@nestjs/common';
import { ClassManagementController } from './class-management.controller';

@Module({
    controllers: [ClassManagementController],
})
export class ClassManagementModule {}
