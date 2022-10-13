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
exports.TeacherManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let TeacherManagementController = class TeacherManagementController {
    createTeacher() {
        return 'teacher created';
    }
    updateTeacher(teacherId) {
        return `This action update teacher with id = #${teacherId}`;
    }
    getTeacherWithId(teacherId) {
        return `This action get teacher with id = #${teacherId}`;
    }
    getAllTeacher() {
        return `This action get all teacher`;
    }
    deleteTeacherWithId(teacherId) {
        return `This action delete teacher with id = #${teacherId}`;
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TeacherManagementController.prototype, "createTeacher", null);
__decorate([
    (0, common_1.Put)('/:teacherId'),
    __param(0, (0, common_1.Param)('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], TeacherManagementController.prototype, "updateTeacher", null);
__decorate([
    (0, common_1.Get)('/:teacherId'),
    __param(0, (0, common_1.Param)('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], TeacherManagementController.prototype, "getTeacherWithId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TeacherManagementController.prototype, "getAllTeacher", null);
__decorate([
    (0, common_1.Delete)('/:teacherId'),
    __param(0, (0, common_1.Param)('teacherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], TeacherManagementController.prototype, "deleteTeacherWithId", null);
TeacherManagementController = __decorate([
    (0, swagger_1.ApiTags)('teacher-management'),
    (0, common_1.Controller)('teacher-management')
], TeacherManagementController);
exports.TeacherManagementController = TeacherManagementController;
//# sourceMappingURL=teacher-management.controller.js.map