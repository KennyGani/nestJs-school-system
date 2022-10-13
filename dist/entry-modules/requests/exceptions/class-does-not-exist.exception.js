"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDoesNotExistException = void 0;
const common_1 = require("@nestjs/common");
class ClassDoesNotExistException extends common_1.BadRequestException {
    constructor(classKey) {
        super(classKey);
        this.name = ClassDoesNotExistException.name;
    }
}
exports.ClassDoesNotExistException = ClassDoesNotExistException;
//# sourceMappingURL=class-does-not-exist.exception.js.map