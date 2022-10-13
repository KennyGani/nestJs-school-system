"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentDoesNotExistException = void 0;
const common_1 = require("@nestjs/common");
class StudentDoesNotExistException extends common_1.BadRequestException {
    constructor(studentKey) {
        super(studentKey);
        this.name = StudentDoesNotExistException.name;
    }
}
exports.StudentDoesNotExistException = StudentDoesNotExistException;
//# sourceMappingURL=student-does-not-exist.exception.js.map