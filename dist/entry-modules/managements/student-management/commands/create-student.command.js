"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentCommand = void 0;
class CreateStudentCommand {
    constructor(key, firstName, lastName, email, gender, address, dob, classKey) {
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
exports.CreateStudentCommand = CreateStudentCommand;
//# sourceMappingURL=create-student.command.js.map