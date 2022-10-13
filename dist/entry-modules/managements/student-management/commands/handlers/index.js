"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandlers = void 0;
const create_student_command_handler_1 = require("./create-student.command-handler");
const delete_student_command_handler_1 = require("./delete-student.command-handler");
const update_student_command_handler_1 = require("./update-student.command-handler");
exports.CommandHandlers = [
    create_student_command_handler_1.CreateStudentCommandHandler,
    update_student_command_handler_1.UpdateStudentCommandHandler,
    delete_student_command_handler_1.DeleteStudentCommandHandler,
];
//# sourceMappingURL=index.js.map