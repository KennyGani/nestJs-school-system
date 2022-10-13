"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClassManagementModule = void 0;
const common_1 = require("@nestjs/common");
const student_class_management_controller_1 = require("./student-class-management.controller");
let StudentClassManagementModule = class StudentClassManagementModule {
};
StudentClassManagementModule = __decorate([
    (0, common_1.Module)({
        controllers: [student_class_management_controller_1.StudentClassManagementController],
    })
], StudentClassManagementModule);
exports.StudentClassManagementModule = StudentClassManagementModule;
//# sourceMappingURL=student-class-management.module.js.map