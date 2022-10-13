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
exports.RequestService = void 0;
const common_1 = require("@nestjs/common");
const class_proxy_service_1 = require("../../classes/services/class-proxy.service");
const student_proxy_service_1 = require("../../students/services/student-proxy.service");
const teacher_proxy_service_1 = require("../../teachers/services/teacher-proxy.service");
const enums_1 = require("../enums");
const exceptions_1 = require("../exceptions");
const repositories_1 = require("../repositories");
let RequestService = class RequestService {
    constructor(requestRepository, studentProxyService, classProxyService, teacherProxyService) {
        this.requestRepository = requestRepository;
        this.studentProxyService = studentProxyService;
        this.classProxyService = classProxyService;
        this.teacherProxyService = teacherProxyService;
    }
    async createRequestToChangeStudentClass(requesterName, studentKey, currentClassKey, targetClassKey) {
        const student = await this.studentProxyService.getStudentByKey(studentKey);
        if (!student) {
            throw new exceptions_1.StudentDoesNotExistException(studentKey);
        }
        const doesTargetClassExist = await this.classProxyService.doesClassExist(targetClassKey);
        if (!doesTargetClassExist) {
            throw new exceptions_1.ClassDoesNotExistException(targetClassKey);
        }
        if (student.classKey !== currentClassKey) {
            throw new exceptions_1.CurrentClassDoesNotMatchWithActualClassException(currentClassKey);
        }
        await this.requestRepository.create(requesterName, enums_1.RequestType.ChangeStudentClass, {
            studentKey: studentKey,
            currentClassKey: currentClassKey,
            targetClassKey: targetClassKey,
        });
    }
    async createRequestToChangeHomeroomClass(requesterName, teacherKey, currentClassKey) {
        const teacher = await this.teacherProxyService.getTeacherByKey(teacherKey);
        if (!teacher) {
            throw new exceptions_1.TeacherDoesNotExistException(teacherKey);
        }
        if (teacher.classKey !== currentClassKey) {
            throw new exceptions_1.CurrentClassDoesNotMatchWithActualClassException(currentClassKey);
        }
        await this.requestRepository.create(requesterName, enums_1.RequestType.ChangeHomeroomTeacher, {
            teacherKey: teacherKey,
            currentClassKey: currentClassKey,
        });
    }
};
RequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repositories_1.RequestRepository,
        student_proxy_service_1.StudentProxyService,
        class_proxy_service_1.ClassProxyService,
        teacher_proxy_service_1.TeacherProxyService])
], RequestService);
exports.RequestService = RequestService;
//# sourceMappingURL=request.service.js.map