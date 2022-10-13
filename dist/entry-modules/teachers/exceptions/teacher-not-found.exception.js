"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class TeacherNotFoundException extends common_1.NotFoundException {
    constructor(teacherKey) {
        super(teacherKey);
        this.name = TeacherNotFoundException.name;
    }
}
exports.TeacherNotFoundException = TeacherNotFoundException;
//# sourceMappingURL=teacher-not-found.exception.js.map