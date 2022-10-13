"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClassModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const repositories_1 = require("./repositories");
const services_1 = require("./services");
const student_class_controller_1 = require("./student-class.controller");
let StudentClassModule = class StudentClassModule {
};
StudentClassModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: repositories_1.StudentClassDataModel.name, schema: repositories_1.StudentClassSchema },
            ]),
        ],
        controllers: [student_class_controller_1.StudentClassController],
        providers: [repositories_1.StudentClassRepository, services_1.StudentClassService],
    })
], StudentClassModule);
exports.StudentClassModule = StudentClassModule;
//# sourceMappingURL=student-class.module.js.map