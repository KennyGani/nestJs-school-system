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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestChangeStudentClassDtoInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class RequestChangeStudentClassDtoInput {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the name of the requester',
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RequestChangeStudentClassDtoInput.prototype, "requesterName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the student key',
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RequestChangeStudentClassDtoInput.prototype, "studentKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the current class of the student',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], RequestChangeStudentClassDtoInput.prototype, "currentClassKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the target class of the student',
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RequestChangeStudentClassDtoInput.prototype, "targetClassKey", void 0);
exports.RequestChangeStudentClassDtoInput = RequestChangeStudentClassDtoInput;
//# sourceMappingURL=request-change-student-class.dto-input.js.map