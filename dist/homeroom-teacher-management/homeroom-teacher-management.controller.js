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
exports.HomeroomTeacherManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let HomeroomTeacherManagementController = class HomeroomTeacherManagementController {
    assignStudentToClass() {
        return 'teacher assign to class';
    }
    getHomeroomTeacherWithClassKey(classKey) {
        return `This action get homeroom teacher in class with class key = #${classKey}`;
    }
    getClassWithTeacherKey(teacherKey) {
        return `This action get homeroom teacher class with teacher key = #${teacherKey}`;
    }
};
__decorate([
    (0, common_1.Post)('assign-teacher'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], HomeroomTeacherManagementController.prototype, "assignStudentToClass", null);
__decorate([
    (0, common_1.Get)('/?'),
    __param(0, (0, common_1.Query)('classKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], HomeroomTeacherManagementController.prototype, "getHomeroomTeacherWithClassKey", null);
__decorate([
    (0, common_1.Get)('/:teacherKey/getClass'),
    __param(0, (0, common_1.Param)('teacherKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], HomeroomTeacherManagementController.prototype, "getClassWithTeacherKey", null);
HomeroomTeacherManagementController = __decorate([
    (0, swagger_1.ApiTags)('homeroom-teacher-management'),
    (0, common_1.Controller)('homeroom-teacher-management')
], HomeroomTeacherManagementController);
exports.HomeroomTeacherManagementController = HomeroomTeacherManagementController;
//# sourceMappingURL=homeroom-teacher-management.controller.js.map