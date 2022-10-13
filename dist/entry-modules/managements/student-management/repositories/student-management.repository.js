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
exports.StudentManagementRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const student_management_schema_1 = require("./student-management.schema");
let StudentManagementRepository = class StudentManagementRepository {
    constructor(studentManagementModel) {
        this.studentManagementModel = studentManagementModel;
    }
    async createStudentAndCommitEvent(studentAggregate) {
        const result = await this.studentManagementModel.create({
            key: studentAggregate.key,
            firstName: studentAggregate.firstName,
            lastName: studentAggregate.lastName,
            email: studentAggregate.email,
            gender: studentAggregate.gender,
            address: studentAggregate.address,
            dob: studentAggregate.dob,
            classKey: studentAggregate.classKey,
            createdAt: studentAggregate.createdAt,
            updatedAt: studentAggregate.updatedAt,
        });
        studentAggregate.commit();
        return result;
    }
    async findStudentByKey(key) {
        return await this.studentManagementModel
            .findOne({
            key: key,
        })
            .exec();
    }
    async updateStudentAndCommitEvent(currentKey, studentAggregate) {
        await this.studentManagementModel.updateOne({ key: currentKey }, {
            $set: {
                key: studentAggregate.key,
                firstName: studentAggregate.firstName,
                lastName: studentAggregate.lastName,
                email: studentAggregate.email,
                gender: studentAggregate.gender,
                address: studentAggregate.address,
                dob: studentAggregate.dob,
                classKey: studentAggregate.classKey,
                createdAt: studentAggregate.createdAt,
                updatedAt: studentAggregate.updatedAt,
            },
        });
        studentAggregate.commit();
    }
    async deleteStudentAndCommitEvent(studentAggregate) {
        await this.studentManagementModel.deleteOne({
            key: studentAggregate.key,
        });
    }
};
StudentManagementRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_management_schema_1.StudentManagementDataModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentManagementRepository);
exports.StudentManagementRepository = StudentManagementRepository;
//# sourceMappingURL=student-management.repository.js.map