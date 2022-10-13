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
exports.StudentManagementController = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const commands_1 = require("./commands");
const dtos_1 = require("./dtos");
let StudentManagementController = class StudentManagementController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    async createStudent(createStudentManagement) {
        await this.commandBus.execute(new commands_1.CreateStudentCommand(createStudentManagement.key, createStudentManagement.firstName, createStudentManagement.lastName, createStudentManagement.email, createStudentManagement.gender, createStudentManagement.address, createStudentManagement.dob, createStudentManagement.classKey));
    }
    async updateStudent(updateStudentManagement) {
        return await this.commandBus.execute(new commands_1.UpdateStudentCommand(updateStudentManagement.currentKey, updateStudentManagement.newKey, updateStudentManagement.firstName, updateStudentManagement.lastName, updateStudentManagement.email, updateStudentManagement.gender, updateStudentManagement.address, updateStudentManagement.dob, updateStudentManagement.classKey));
    }
    async deleteStudent(deleteStudentManagement) {
        return await this.commandBus.execute(new commands_1.DeleteStudentCommand(deleteStudentManagement.key));
    }
    async deleteStudentWithKey(studentKey) {
        return await this.commandBus.execute(new commands_1.DeleteStudentCommand(studentKey));
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: dtos_1.CreateStudentDtoInput }),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateStudentDtoInput]),
    __metadata("design:returntype", Promise)
], StudentManagementController.prototype, "createStudent", null);
__decorate([
    (0, common_1.Put)(),
    (0, swagger_1.ApiBody)({ type: dtos_1.UpdateStudentDtoInput }),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateStudentDtoInput]),
    __metadata("design:returntype", Promise)
], StudentManagementController.prototype, "updateStudent", null);
__decorate([
    (0, common_1.Delete)(),
    (0, swagger_1.ApiBody)({ type: dtos_1.DeleteStudentDtoInput }),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.DeleteStudentDtoInput]),
    __metadata("design:returntype", Promise)
], StudentManagementController.prototype, "deleteStudent", null);
__decorate([
    (0, common_1.Delete)('/:studentKey'),
    (0, swagger_1.ApiCreatedResponse)(),
    (0, swagger_1.ApiBadRequestResponse)(),
    __param(0, (0, common_1.Param)('studentKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentManagementController.prototype, "deleteStudentWithKey", null);
StudentManagementController = __decorate([
    (0, swagger_1.ApiTags)('student-management'),
    (0, common_1.Controller)('student-management'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], StudentManagementController);
exports.StudentManagementController = StudentManagementController;
//# sourceMappingURL=student-management.controller.js.map