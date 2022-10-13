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
exports.StudentRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const student_schema_1 = require("./student.schema");
let StudentRepository = class StudentRepository {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async findOne(studentKey) {
        return await this.studentModel.findOne({ key: studentKey }).exec();
    }
    async findAllStudentsForClass(classKey) {
        return await this.studentModel.find({ classKey: classKey }).exec();
    }
    async createStudent(key, firstName, lastName, email, gender, address, dob, classKey) {
        return await this.studentModel.create({
            key: key,
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: gender,
            address: address,
            dob: dob,
            classKey: classKey,
        });
    }
    async updateStudent(currentKey, newKey, firstName, lastName, email, gender, address, dob, classKey) {
        await this.studentModel.updateOne({ key: currentKey }, {
            $set: {
                key: newKey,
                firstName: firstName,
                lastName: lastName,
                email: email,
                gender: gender,
                address: address,
                dob: dob,
                classKey: classKey,
            },
        });
    }
};
StudentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_schema_1.StudentDataModel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentRepository);
exports.StudentRepository = StudentRepository;
//# sourceMappingURL=student.repository.js.map