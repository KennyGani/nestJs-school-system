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
exports.TeacherDtoOutput = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../enums");
class TeacherDtoOutput {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'the key of the teacher',
        required: true,
        nullable: false,
    }),
    __metadata("design:type", String)
], TeacherDtoOutput.prototype, "key", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the first name of the teacher',
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TeacherDtoOutput.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the last name of the teacher',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TeacherDtoOutput.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the email of the teacher',
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TeacherDtoOutput.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the gender of the teacher',
        required: true,
        nullable: false,
        enum: Object.values(enums_1.GenderType),
    }),
    (0, class_validator_1.IsEnum)(enums_1.GenderType),
    __metadata("design:type", String)
], TeacherDtoOutput.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the address of the teacher',
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], TeacherDtoOutput.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the dob of the teacher',
        required: true,
        nullable: false,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], TeacherDtoOutput.prototype, "dob", void 0);
exports.TeacherDtoOutput = TeacherDtoOutput;
//# sourceMappingURL=teacher.dto-output.js.map