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
exports.UpdateStudentCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const student_management_aggregate_1 = require("../../aggregates/student-management.aggregate");
const student_management_repository_1 = require("../../repositories/student-management.repository");
const update_student_command_1 = require("../update-student.command");
let UpdateStudentCommandHandler = class UpdateStudentCommandHandler {
    constructor(repository, eventPublisher) {
        this.repository = repository;
        this.eventPublisher = eventPublisher;
    }
    async execute(command) {
        const oldStudentData = await this.repository.findStudentByKey(command.currentKey);
        let studentNewKey;
        if (command.newKey) {
            studentNewKey = command.newKey;
        }
        else {
            studentNewKey = command.currentKey;
        }
        const studentNewFirstName = command.firstName == oldStudentData.firstName || undefined || ''
            ? oldStudentData.firstName
            : command.firstName;
        const studentNewLastName = command.lastName == oldStudentData.lastName || undefined || ''
            ? oldStudentData.lastName
            : command.lastName;
        const studentNewEmail = command.email == oldStudentData.email || undefined || ''
            ? oldStudentData.email
            : command.email;
        const studentNewGender = command.gender == oldStudentData.gender || undefined || ''
            ? oldStudentData.gender
            : command.gender;
        const studentNewAddress = command.address == oldStudentData.address || undefined || ''
            ? oldStudentData.address
            : command.address;
        const studentNewDob = command.dob == oldStudentData.dob || undefined || ''
            ? oldStudentData.dob
            : command.dob;
        const studentNewClassKey = command.classKey == oldStudentData.classKey || undefined || ''
            ? oldStudentData.classKey
            : command.classKey;
        const studentAggregate = student_management_aggregate_1.StudentAggregate.updateAndConfigure(command.currentKey, studentNewKey, studentNewFirstName, studentNewLastName, studentNewEmail, studentNewGender, studentNewAddress, studentNewDob, studentNewClassKey, oldStudentData.createdAt, this.eventPublisher);
        await this.repository.updateStudentAndCommitEvent(command.currentKey, studentAggregate);
        return;
    }
};
UpdateStudentCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_student_command_1.UpdateStudentCommand),
    __metadata("design:paramtypes", [student_management_repository_1.StudentManagementRepository,
        cqrs_1.EventPublisher])
], UpdateStudentCommandHandler);
exports.UpdateStudentCommandHandler = UpdateStudentCommandHandler;
//# sourceMappingURL=update-student.command-handler.js.map