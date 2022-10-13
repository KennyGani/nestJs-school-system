"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentCommand = void 0;
class UpdateStudentCommand {
    constructor(currentKey, newKey, firstName, lastName, email, gender, address, dob, classKey) {
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
exports.UpdateStudentCommand = UpdateStudentCommand;
//# sourceMappingURL=update-student.command.js.map