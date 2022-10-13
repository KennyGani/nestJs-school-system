"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class ClassNotFoundException extends common_1.NotFoundException {
    constructor(classKey) {
        super(classKey);
        this.name = ClassNotFoundException.name;
    }
}
exports.ClassNotFoundException = ClassNotFoundException;
//# sourceMappingURL=class-not-found.exception.js.map