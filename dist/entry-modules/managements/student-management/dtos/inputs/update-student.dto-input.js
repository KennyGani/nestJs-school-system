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
exports.UpdateStudentDtoInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../enums");
class UpdateStudentDtoInput {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'the current key of the student',
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "currentKey", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        description: 'the new key of the student',
        required: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "newKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the first name of the student',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the last name of the student',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the email of the student',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the gender of the student',
        required: false,
        nullable: true,
        enum: Object.values(enums_1.GenderType),
    }),
    (0, class_validator_1.IsEnum)(enums_1.GenderType),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the address of the student',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the dob of the student',
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "dob", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the class of the student',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStudentDtoInput.prototype, "classKey", void 0);
exports.UpdateStudentDtoInput = UpdateStudentDtoInput;
//# sourceMappingURL=update-student.dto-input.js.map