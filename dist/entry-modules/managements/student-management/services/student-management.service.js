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
exports.StudentManagementService = void 0;
const common_1 = require("@nestjs/common");
const student_proxy_service_1 = require("../../../students/services/student-proxy.service");
const exceptions_1 = require("../exceptions");
const repositories_1 = require("../repositories");
let StudentManagementService = class StudentManagementService {
    constructor(studentManagementRepository, studentProxyService) {
        this.studentManagementRepository = studentManagementRepository;
        this.studentProxyService = studentProxyService;
    }
    async createStudent(key, firstName, lastName, email, gender, address, dob, classKey) {
        const student = await this.studentProxyService.getStudentByKey(key);
        if (student) {
            throw new exceptions_1.StudentAlreadyExistException(key);
        }
        await this.studentManagementRepository.createStudent(key, firstName, lastName, email, gender, address, dob, classKey);
    }
};
StudentManagementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.StudentManagementRepository,
        student_proxy_service_1.StudentProxyService])
], StudentManagementService);
exports.StudentManagementService = StudentManagementService;
//# sourceMappingURL=student-management.service.js.map