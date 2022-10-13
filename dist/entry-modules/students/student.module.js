"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const handlers_1 = require("./events/handlers");
const repositories_1 = require("./repositories");
const services_1 = require("./services");
const student_proxy_service_1 = require("./services/student-proxy.service");
const student_controller_1 = require("./student.controller");
let StudentModule = class StudentModule {
};
StudentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: repositories_1.StudentDataModel.name, schema: repositories_1.StudentSchema },
            ]),
        ],
        controllers: [student_controller_1.StudentController],
        providers: [
            repositories_1.StudentRepository,
            services_1.StudentService,
            student_proxy_service_1.StudentProxyService,
            ...handlers_1.EventHandlers,
        ],
        exports: [student_proxy_service_1.StudentProxyService],
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map