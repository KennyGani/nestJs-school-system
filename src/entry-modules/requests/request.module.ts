import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassModule } from '../classes/class.module';
import { StudentModule } from '../students/student.module';
import { TeacherModule } from '../teachers/teacher.module';
import {
    RequestDataModel,
    RequestSchema,
    RequestRepository,
} from './repositories';
import { RequestController } from './request.controller';
import { RequestService } from './services';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: RequestDataModel.name, schema: RequestSchema },
        ]),
        StudentModule,
        ClassModule,
        TeacherModule,
    ],
    controllers: [RequestController],
    providers: [RequestRepository, RequestService],
})
export class RequestModule {}
