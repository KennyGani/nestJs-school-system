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
exports.StudentClassService = void 0;
const common_1 = require("@nestjs/common");
const repositories_1 = require("../repositories");
let StudentClassService = class StudentClassService {
    constructor(classRepository) {
        this.classRepository = classRepository;
    }
    async getStudentClassByStudentKey(studentKey) {
        const studentClass = await this.classRepository.findOneByStudentKey(studentKey);
        if (!studentClass) {
            throw new common_1.NotFoundException(`student in class with key ${studentClass} does not exist`);
        }
        return {
            studentKey: studentClass.studentKey,
            classKey: studentClass.classKey,
        };
    }
};
StudentClassService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.StudentClassRepository])
], StudentClassService);
exports.StudentClassService = StudentClassService;
//# sourceMappingURL=student-class.service.js.map