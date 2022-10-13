"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCreatedEvent = void 0;
const share_module_1 = require("../../../../modules/share.module");
class StudentCreatedEvent extends share_module_1.BaseEvent {
    constructor(key, firstName, lastName, email, gender, address, dob, classKey) {
        super(StudentCreatedEvent.EVENT_NAME);
        this.key = key;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.dob = dob;
        this.classKey = classKey;
    }
}
exports.StudentCreatedEvent = StudentCreatedEvent;
StudentCreatedEvent.EVENT_NAME = StudentCreatedEvent.name;
//# sourceMappingURL=student-created.event.js.map