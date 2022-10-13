"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class StudentNotFoundException extends common_1.NotFoundException {
    constructor(studentKey) {
        super(studentKey);
        this.name = StudentNotFoundException.name;
    }
}
exports.StudentNotFoundException = StudentNotFoundException;
//# sourceMappingURL=student-not-found.exception.js.map