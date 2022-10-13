"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHandlers = void 0;
const student_created_event_handler_1 = require("./student-created.event-handler");
const student_updated_event_handler_1 = require("./student-updated.event-handler");
exports.EventHandlers = [
    student_created_event_handler_1.StudentCreatedEventHandler,
    student_updated_event_handler_1.StudentUpdatedEventHandler,
];
//# sourceMappingURL=index.js.map