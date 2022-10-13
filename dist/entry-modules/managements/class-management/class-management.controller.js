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
exports.ClassManagementController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let ClassManagementController = class ClassManagementController {
    createClass() {
        return 'class created';
    }
    updateClass(classId) {
        return `This action update class with id = #${classId}`;
    }
    getClassWithId(classId) {
        return `This action get class with id = #${classId}`;
    }
    getAllClass() {
        return `This action get all class`;
    }
    deleteClassWithId(classId) {
        return `This action delete class with id = #${classId}`;
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ClassManagementController.prototype, "createClass", null);
__decorate([
    (0, common_1.Put)('/:classId'),
    __param(0, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ClassManagementController.prototype, "updateClass", null);
__decorate([
    (0, common_1.Get)('/:classId'),
    __param(0, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ClassManagementController.prototype, "getClassWithId", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ClassManagementController.prototype, "getAllClass", null);
__decorate([
    (0, common_1.Delete)('/:classId'),
    __param(0, (0, common_1.Param)('classId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], ClassManagementController.prototype, "deleteClassWithId", null);
ClassManagementController = __decorate([
    (0, swagger_1.ApiTags)('class-management'),
    (0, common_1.Controller)('class-management')
], ClassManagementController);
exports.ClassManagementController = ClassManagementController;
//# sourceMappingURL=class-management.controller.js.map