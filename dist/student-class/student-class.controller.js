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
exports.StudentClassController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("./dtos");
const services_1 = require("./services");
let StudentClassController = class StudentClassController {
    constructor(service) {
        this.service = service;
    }
    async getStudentClass(studentKey) {
        const studentClass = await this.service.getStudentClassByStudentKey(studentKey);
        return {
            studentKey: studentClass.studentKey,
            classKey: studentClass.classKey,
        };
    }
    requestChangeClass() {
        return `This action request student change class`;
    }
};
__decorate([
    (0, common_1.Get)('/:studentKey'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.StudentClassDtoOutput }),
    __param(0, (0, common_1.Param)('studentKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentClassController.prototype, "getStudentClass", null);
__decorate([
    (0, common_1.Post)('/request-class-change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StudentClassController.prototype, "requestChangeClass", null);
StudentClassController = __decorate([
    (0, swagger_1.ApiTags)('student class'),
    (0, common_1.Controller)('student-class'),
    __metadata("design:paramtypes", [services_1.StudentClassService])
], StudentClassController);
exports.StudentClassController = StudentClassController;
//# sourceMappingURL=student-class.controller.js.map