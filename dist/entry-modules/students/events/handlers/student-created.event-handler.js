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
exports.StudentCreatedEventHandler = void 0;
const events_handler_decorator_1 = require("@nestjs/cqrs/dist/decorators/events-handler.decorator");
const events_1 = require("../../../managements/student-management/events");
const repositories_1 = require("../../repositories");
let StudentCreatedEventHandler = class StudentCreatedEventHandler {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async handle(event) {
        await this.studentRepository.createStudent(event.key, event.firstName, event.lastName, event.email, event.gender, event.address, event.dob, event.classKey);
        return;
    }
};
StudentCreatedEventHandler = __decorate([
    (0, events_handler_decorator_1.EventsHandler)(events_1.StudentCreatedEvent),
    __metadata("design:paramtypes", [repositories_1.StudentRepository])
], StudentCreatedEventHandler);
exports.StudentCreatedEventHandler = StudentCreatedEventHandler;
//# sourceMappingURL=student-created.event-handler.js.map