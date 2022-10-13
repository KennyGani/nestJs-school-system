"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClassManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let StudentClassManagementController = class StudentClassManagementController {
    assignStudentToClass() {
        return 'student assign to class';
    }
    getAllStudentInClassWithClassKey(classKey) {
        return `This action get all student in class with class key = #${classKey}`;
    }
    getStudentClassWithStudentKey(studentKey) {
        return `This action get student class with student key = #${studentKey}`;
    }
};
__decorate([
    (0, common_1.Post)('assign-student'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentClassManagementController.prototype, "assignStudentToClass", null);
__decorate([
    (0, common_1.Get)('/getAllStudents?'),
    __param(0, (0, common_1.Query)('classKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], StudentClassManagementController.prototype, "getAllStudentInClassWithClassKey", null);
__decorate([
    (0, common_1.Get)('/:studentKey'),
    __param(0, (0, common_1.Param)('studentKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], StudentClassManagementController.prototype, "getStudentClassWithStudentKey", null);
StudentClassManagementController = __decorate([
    (0, swagger_1.ApiTags)('student-class-management'),
    (0, common_1.Controller)('student-class-management')
], StudentClassManagementController);
exports.StudentClassManagementController = StudentClassManagementController;
//# sourceMappingURL=student-class-management.controller.js.map