"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAlreadyExistException = void 0;
const common_1 = require("@nestjs/common");
class StudentAlreadyExistException extends common_1.BadRequestException {
    constructor(key) {
        super(key);
        this.name = StudentAlreadyExistException.name;
    }
}
exports.StudentAlreadyExistException = StudentAlreadyExistException;
//# sourceMappingURL=student-already-exist.exception.js.map