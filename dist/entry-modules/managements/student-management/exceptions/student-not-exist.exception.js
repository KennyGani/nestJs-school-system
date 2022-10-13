"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentNotExistException = void 0;
const common_1 = require("@nestjs/common");
class StudentNotExistException extends common_1.BadRequestException {
    constructor(key) {
        super(key);
        this.name = StudentNotExistException.name;
    }
}
exports.StudentNotExistException = StudentNotExistException;
//# sourceMappingURL=student-not-exist.exception.js.map