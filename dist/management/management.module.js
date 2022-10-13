"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementModule = void 0;
const common_1 = require("@nestjs/common");
const management_controller_1 = require("./management.controller");
const management_controller_2 = require("./management.controller");
const management_controller_3 = require("./management.controller");
const management_controller_4 = require("./management.controller");
const management_controller_5 = require("./management.controller");
let ManagementModule = class ManagementModule {
};
ManagementModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            management_controller_1.ManagementControllerStudent,
            management_controller_2.ManagementControllerTeacher,
            management_controller_3.ManagementControllerClass,
            management_controller_4.ManagementControllerStudentClass,
            management_controller_5.ManagementControllerHomeroomTeacher,
        ],
    })
], ManagementModule);
exports.ManagementModule = ManagementModule;
//# sourceMappingURL=management.module.js.map