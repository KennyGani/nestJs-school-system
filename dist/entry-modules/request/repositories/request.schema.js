"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestSchema = exports.RequestDataModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const enums_1 = require("../enums");
let RequestDataModel = class RequestDataModel {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RequestDataModel.prototype, "requesterKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: enums_1.RequestType }),
    __metadata("design:type", String)
], RequestDataModel.prototype, "requestType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Mixed }),
    __metadata("design:type", Object)
], RequestDataModel.prototype, "requestAction", void 0);
RequestDataModel = __decorate([
    (0, mongoose_1.Schema)({ collection: 'requests' })
], RequestDataModel);
exports.RequestDataModel = RequestDataModel;
exports.RequestSchema = mongoose_1.SchemaFactory.createForClass(RequestDataModel);
//# sourceMappingURL=request.schema.js.map