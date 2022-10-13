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
exports.TeacherSchema = exports.TeacherDataModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const enums_1 = require("../enums");
let TeacherDataModel = class TeacherDataModel {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeacherDataModel.prototype, "key", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeacherDataModel.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeacherDataModel.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeacherDataModel.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.GenderType }),
    __metadata("design:type", String)
], TeacherDataModel.prototype, "gender", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeacherDataModel.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], TeacherDataModel.prototype, "dob", void 0);
TeacherDataModel = __decorate([
    (0, mongoose_1.Schema)({ collection: 'teachers' })
], TeacherDataModel);
exports.TeacherDataModel = TeacherDataModel;
exports.TeacherSchema = mongoose_1.SchemaFactory.createForClass(TeacherDataModel);
//# sourceMappingURL=teacher.schema.js.map