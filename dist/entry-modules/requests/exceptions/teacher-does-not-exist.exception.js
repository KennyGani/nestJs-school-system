"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherDoesNotExistException = void 0;
const common_1 = require("@nestjs/common");
class TeacherDoesNotExistException extends common_1.BadRequestException {
    constructor(teacherKey) {
        super(teacherKey);
        this.name = TeacherDoesNotExistException.name;
    }
}
exports.TeacherDoesNotExistException = TeacherDoesNotExistException;
//# sourceMappingURL=teacher-does-not-exist.exception.js.map