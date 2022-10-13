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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../exceptions");
const repositories_1 = require("../repositories");
let TeacherService = class TeacherService {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    async getTeacherByKey(teacherKey) {
        const teacher = await this.teacherRepository.findOne(teacherKey);
        if (!teacher) {
            throw new exceptions_1.TeacherNotFoundException(`Teacher with key ${teacherKey} does not exist`);
        }
        return {
            address: teacher.address,
            dob: teacher.dob,
            email: teacher.email,
            gender: teacher.gender,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            key: teacher.key,
            classKey: teacher.classKey,
        };
    }
    async getAllTeachers() {
        const teachers = await this.teacherRepository.findAllTeachers();
        if (teachers.length <= 0) {
            throw new exceptions_1.TeacherNotFoundException(`no teacher found`);
        }
        return teachers.map((teacher) => ({
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            address: teacher.address,
            dob: teacher.dob,
            email: teacher.email,
            gender: teacher.gender,
            key: teacher.key,
            classKey: teacher.classKey,
        }));
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.TeacherRepository])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map