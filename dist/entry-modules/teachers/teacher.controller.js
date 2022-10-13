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
exports.TeacherController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("./dtos");
const services_1 = require("./services");
let TeacherController = class TeacherController {
    constructor(teacherService) {
        this.teacherService = teacherService;
    }
    async getAllTeachers() {
        const teachers = await this.teacherService.getAllTeachers();
        return teachers.map((teacher) => ({
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            address: teacher.address,
            dob: teacher.dob,
            email: teacher.email,
            gender: teacher.gender,
            key: teacher.key,
            classKey: teacher.classKey,
        }));
    }
    async getTeacher(teacherKey) {
        const teacher = await this.teacherService.getTeacherByKey(teacherKey);
        return {
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            address: teacher.address,
            dob: teacher.dob,
            email: teacher.email,
            gender: teacher.gender,
            key: teacher.key,
            classKey: teacher.classKey,
        };
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.TeacherDtoOutput }),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getAllTeachers", null);
__decorate([
    (0, common_1.Get)('/:teacherKey'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.TeacherDtoOutput }),
    (0, swagger_1.ApiNotFoundResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Param)('teacherKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "getTeacher", null);
TeacherController = __decorate([
    (0, swagger_1.ApiTags)('teacher'),
    (0, common_1.Controller)('teacher'),
    __metadata("design:paramtypes", [services_1.TeacherService])
], TeacherController);
exports.TeacherController = TeacherController;
//# sourceMappingURL=teacher.controller.js.map