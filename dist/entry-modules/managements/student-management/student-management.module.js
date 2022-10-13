"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManagementModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const mongoose_1 = require("@nestjs/mongoose");
const handlers_1 = require("./commands/handlers");
const repositories_1 = require("./repositories");
const student_management_repository_1 = require("./repositories/student-management.repository");
const student_management_controller_1 = require("./student-management.controller");
let StudentManagementModule = class StudentManagementModule {
};
StudentManagementModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: repositories_1.StudentManagementDataModel.name,
                    schema: repositories_1.StudentManagementSchema,
                },
            ]),
            cqrs_1.CqrsModule,
        ],
        controllers: [student_management_controller_1.StudentManagementController],
        providers: [student_management_repository_1.StudentManagementRepository, ...handlers_1.CommandHandlers],
    })
], StudentManagementModule);
exports.StudentManagementModule = StudentManagementModule;
//# sourceMappingURL=student-management.module.js.map