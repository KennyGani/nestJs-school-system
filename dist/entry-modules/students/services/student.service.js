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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../exceptions");
const repositories_1 = require("../repositories");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async getStudentByKey(studentKey) {
        const student = await this.studentRepository.findOne(studentKey);
        if (!student) {
            throw new exceptions_1.StudentNotFoundException(`Student with key ${studentKey} does not found`);
        }
        return {
            address: student.address,
            dob: student.dob,
            email: student.email,
            gender: student.gender,
            firstName: student.firstName,
            lastName: student.lastName,
            key: student.key,
            classKey: student.classKey,
        };
    }
    async getAllStudentsForClass(classKey) {
        const students = await this.studentRepository.findAllStudentsForClass(classKey);
        if (students.length <= 0) {
            throw new exceptions_1.StudentNotFoundException(`no student in class with key ${classKey}`);
        }
        return students.map((student) => ({
            firstName: student.firstName,
            lastName: student.lastName,
            address: student.address,
            dob: student.dob,
            email: student.email,
            gender: student.gender,
            key: student.key,
            classKey: student.classKey,
        }));
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.StudentRepository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map