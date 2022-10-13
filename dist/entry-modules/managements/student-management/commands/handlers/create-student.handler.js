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
exports.CreateStudentHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const exceptions_1 = require("../../exceptions");
const student_management_repository_1 = require("../../repositories/student-management.repository");
const create_student_command_1 = require("../create-student.command");
let CreateStudentHandler = class CreateStudentHandler {
    constructor(repository, publisher) {
        this.repository = repository;
        this.publisher = publisher;
    }
    async execute(command) {
        const studentAlreadyExist = await this.repository.findStudentByKey(command.key);
        if (studentAlreadyExist) {
            throw new exceptions_1.StudentAlreadyExistException(command.key);
        }
        const student = await this.repository.createStudent(command.key, command.firstName, command.lastName, command.email, command.gender, command.address, command.dob, command.classKey);
        return student;
    }
};
CreateStudentHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_student_command_1.CreateStudent),
    __metadata("design:paramtypes", [student_management_repository_1.StudentManagementRepository,
        cqrs_1.EventPublisher])
], CreateStudentHandler);
exports.CreateStudentHandler = CreateStudentHandler;
//# sourceMappingURL=create-student.handler.js.map