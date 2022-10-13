"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentUpdatedEvent = void 0;
const share_module_1 = require("../../../../modules/share.module");
class StudentUpdatedEvent extends share_module_1.BaseEvent {
    constructor(currentKey, newKey, firstName, lastName, email, gender, address, dob, classKey) {
        super(StudentUpdatedEvent.EVENT_NAME);
        this.currentKey = currentKey;
        this.newKey = newKey;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.address = address;
        this.dob = dob;
        this.classKey = classKey;
    }
}
exports.StudentUpdatedEvent = StudentUpdatedEvent;
StudentUpdatedEvent.EVENT_NAME = StudentUpdatedEvent.name;
//# sourceMappingURL=student-updated.event.js.map