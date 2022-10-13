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
import { GenderType } from '../enums';
import { Student } from '../models';
export declare class StudentDataModel implements Student {
    key: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: GenderType;
    address: string;
    dob: Date;
}
export declare const StudentSchema: import("mongoose").Schema<StudentDataModel, import("mongoose").Model<StudentDataModel, any, any, any, any>, {}, {}, any, {}, "type", StudentDataModel>;
export declare type StudentDocument = StudentDataModel & Document;
