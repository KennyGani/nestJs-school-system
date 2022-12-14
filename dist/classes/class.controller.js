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
exports.ClassController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("./dtos");
const services_1 = require("./services");
let ClassController = class ClassController {
    constructor(service) {
        this.service = service;
    }
    async getClass(classKey) {
        const classObject = await this.service.getClassByKey(classKey);
        return {
            key: classObject.key,
            name: classObject.name,
        };
    }
};
__decorate([
    (0, common_1.Get)('/:classKey'),
    (0, common_1.HttpCode)(200),
    (0, swagger_1.ApiOkResponse)({ type: dtos_1.ClassDtoOutput }),
    __param(0, (0, common_1.Param)('classKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "getClass", null);
ClassController = __decorate([
    (0, swagger_1.ApiTags)('class'),
    (0, common_1.Controller)('class'),
    __metadata("design:paramtypes", [services_1.ClassService])
], ClassController);
exports.ClassController = ClassController;
//# sourceMappingURL=class.controller.js.map