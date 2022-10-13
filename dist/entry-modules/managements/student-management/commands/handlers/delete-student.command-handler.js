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
exports.DeleteStudentCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const student_management_aggregate_1 = require("../../aggregates/student-management.aggregate");
const exceptions_1 = require("../../exceptions");
const student_management_repository_1 = require("../../repositories/student-management.repository");
const delete_student_command_1 = require("../delete-student.command");
let DeleteStudentCommandHandler = class DeleteStudentCommandHandler {
    constructor(repository, eventPublisher) {
        this.repository = repository;
        this.eventPublisher = eventPublisher;
    }
    async execute(command) {
        const student = await this.repository.findStudentByKey(command.key);
        if (student) {
            throw new exceptions_1.StudentNotExistException(command.key);
        }
        const studentAggregate = student_management_aggregate_1.StudentAggregate.deleteAndConfigure(command.key, student.firstName, student.lastName, student.email, student.gender, student.address, student.dob, student.classKey, student.createdAt, student.updatedAt, this.eventPublisher);
        await this.repository.deleteStudentAndCommitEvent(studentAggregate);
        return studentAggregate;
    }
};
DeleteStudentCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(delete_student_command_1.DeleteStudentCommand),
    __metadata("design:paramtypes", [student_management_repository_1.StudentManagementRepository,
        cqrs_1.EventPublisher])
], DeleteStudentCommandHandler);
exports.DeleteStudentCommandHandler = DeleteStudentCommandHandler;
//# sourceMappingURL=delete-student.command-handler.js.map