/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import { RequestType } from '../enums';
import { Request } from '../models';
import { ChangeHomeroomTeacher } from '../models/change-homeroom-teacher.model';
import { ChangeStudentClass } from '../models/change-student-class.model';
export declare class RequestDataModel implements Request {
    requesterName: string;
    requestType: RequestType;
    requestAction: ChangeHomeroomTeacher | ChangeStudentClass;
}
export declare const RequestSchema: import("mongoose").Schema<RequestDataModel, import("mongoose").Model<RequestDataModel, any, any, any, any>, {}, {}, any, {}, "type", RequestDataModel>;
export declare type RequestDocument = RequestDataModel & Document;
