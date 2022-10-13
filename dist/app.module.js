"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const class_module_1 = require("./entry-modules/classes/class.module");
const class_management_module_1 = require("./entry-modules/managements/class-management/class-management.module");
const student_management_module_1 = require("./entry-modules/managements/student-management/student-management.module");
const teacher_management_module_1 = require("./entry-modules/managements/teacher-management/teacher-management.module");
const request_module_1 = require("./entry-modules/requests/request.module");
const student_module_1 = require("./entry-modules/students/student.module");
const teacher_module_1 = require("./entry-modules/teachers/teacher.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: (configService) => ({
                    uri: configService.get('MONGODB_CONNECTION_STRING'),
                }),
                inject: [config_1.ConfigService],
            }),
            student_module_1.StudentModule,
            teacher_module_1.TeacherModule,
            student_management_module_1.StudentManagementModule,
            teacher_management_module_1.TeacherManagementModule,
            class_management_module_1.ClassManagementModule,
            class_module_1.ClassModule,
            request_module_1.RequestModule,
            config_1.ConfigModule.forRoot({
                envFilePath: './env/.env',
                isGlobal: true,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map