import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EventHandlers } from './events/handlers';
import { StudentDataModel, StudentRepository, StudentSchema } from './repositories';
import { StudentService } from './services';
import { StudentProxyService } from './services/student-proxy.service';
import { StudentController } from './student.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: StudentDataModel.name, schema: StudentSchema },
        ]),
    ],
    controllers: [StudentController],
    providers: [
        StudentRepository,
        StudentService,
        StudentProxyService,
        ...EventHandlers,
    ],
    exports: [StudentProxyService],
})
export class StudentModule {}
