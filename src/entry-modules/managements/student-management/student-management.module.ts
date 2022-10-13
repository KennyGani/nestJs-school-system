import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { CommandHandlers } from './commands/handlers';
import { StudentManagementDataModel, StudentManagementSchema } from './repositories';
import { StudentManagementRepository } from './repositories/student-management.repository';
import { StudentManagementController } from './student-management.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: StudentManagementDataModel.name,
                schema: StudentManagementSchema,
            },
        ]),
        CqrsModule,
    ],
    controllers: [StudentManagementController],
    providers: [StudentManagementRepository, ...CommandHandlers],
})
export class StudentManagementModule {}
