import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { RequestType } from '../enums';
import { Request } from '../models';
import { ChangeHomeroomTeacher } from '../models/change-homeroom-teacher.model';
import { ChangeStudentClass } from '../models/change-student-class.model';

@Schema({ collection: 'requests' })
export class RequestDataModel implements Request {
    @Prop()
    requesterName: string;

    @Prop({ enum: RequestType })
    requestType: RequestType;

    @Prop({ type: SchemaTypes.Mixed })
    requestAction: ChangeHomeroomTeacher | ChangeStudentClass;
}

export const RequestSchema = SchemaFactory.createForClass(RequestDataModel);
export type RequestDocument = RequestDataModel & Document;
