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
exports.RequestController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dtos_1 = require("./dtos");
const services_1 = require("./services");
let RequestController = class RequestController {
    constructor(service) {
        this.service = service;
    }
    async createRequestChangeStudentClass(request) {
        await this.service.createRequestToChangeStudentClass(request.requesterKey, request.currentClass, request.targetClass);
    }
    async createRequestChangeHomeroomTeacher(request) {
        await this.service.createRequestToChangeHomeroomClass(request.requesterKey, request.currentClass);
    }
};
__decorate([
    (0, common_1.Post)('/change-student-class'),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiBody)({ type: dtos_1.RequestDtoInput }),
    (0, swagger_1.ApiCreatedResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.RequestDtoInput]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "createRequestChangeStudentClass", null);
__decorate([
    (0, common_1.Post)('/change-homeroom-teacher'),
    (0, common_1.HttpCode)(201),
    (0, swagger_1.ApiBody)({ type: dtos_1.RequestDtoInput }),
    (0, swagger_1.ApiCreatedResponse)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.RequestDtoInput]),
    __metadata("design:returntype", Promise)
], RequestController.prototype, "createRequestChangeHomeroomTeacher", null);
RequestController = __decorate([
    (0, swagger_1.ApiTags)('request'),
    (0, common_1.Controller)('request'),
    __metadata("design:paramtypes", [services_1.RequestService])
], RequestController);
exports.RequestController = RequestController;
//# sourceMappingURL=request.controller.js.map