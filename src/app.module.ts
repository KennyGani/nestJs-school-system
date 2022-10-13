import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { ClassModule } from './entry-modules/classes/class.module';
import { ClassManagementModule } from './entry-modules/managements/class-management/class-management.module';
import { StudentManagementModule } from './entry-modules/managements/student-management/student-management.module';
import { TeacherManagementModule } from './entry-modules/managements/teacher-management/teacher-management.module';
import { RequestModule } from './entry-modules/requests/request.module';
import { StudentModule } from './entry-modules/students/student.module';
import { TeacherModule } from './entry-modules/teachers/teacher.module';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_CONNECTION_STRING'),
            }),
            inject: [ConfigService],
        }),
        StudentModule,
        TeacherModule,
        StudentManagementModule,
        TeacherManagementModule,
        ClassManagementModule,
        ClassModule,
        RequestModule,
        ConfigModule.forRoot({
            envFilePath: './env/.env',
            isGlobal: true,
        }),
    ],
})
export class AppModule {}
