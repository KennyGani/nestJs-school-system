"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentClassDoesNotMatchWithActualClassException = void 0;
const common_1 = require("@nestjs/common");
class CurrentClassDoesNotMatchWithActualClassException extends common_1.BadRequestException {
    constructor(classKey) {
        super(classKey);
        this.name = CurrentClassDoesNotMatchWithActualClassException.name;
    }
}
exports.CurrentClassDoesNotMatchWithActualClassException = CurrentClassDoesNotMatchWithActualClassException;
//# sourceMappingURL=current-class-does-not-match-with-actual-class.exception.js.map