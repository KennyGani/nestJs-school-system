import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
    TeacherDataModel,
    TeacherSchema,
    TeacherRepository,
} from './repositories';
import { TeacherService } from './services';
import { TeacherProxyService } from './services/teacher-proxy.service';
import { TeacherController } from './teacher.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: TeacherDataModel.name, schema: TeacherSchema },
        ]),
    ],
    controllers: [TeacherController],
    providers: [TeacherRepository, TeacherService, TeacherProxyService],
    exports: [TeacherProxyService],
})
export class TeacherModule {}
