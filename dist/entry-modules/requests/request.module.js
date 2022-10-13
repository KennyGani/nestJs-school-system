"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const class_module_1 = require("../classes/class.module");
const student_module_1 = require("../students/student.module");
const teacher_module_1 = require("../teachers/teacher.module");
const repositories_1 = require("./repositories");
const request_controller_1 = require("./request.controller");
const services_1 = require("./services");
let RequestModule = class RequestModule {
};
RequestModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: repositories_1.RequestDataModel.name, schema: repositories_1.RequestSchema },
            ]),
            student_module_1.StudentModule,
            class_module_1.ClassModule,
            teacher_module_1.TeacherModule,
        ],
        controllers: [request_controller_1.RequestController],
        providers: [repositories_1.RequestRepository, services_1.RequestService],
    })
], RequestModule);
exports.RequestModule = RequestModule;
//# sourceMappingURL=request.module.js.map