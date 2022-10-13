import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { GenderType } from '../enums';
import { Student } from '../models';

@Schema({ collection: 'students' })
export class StudentDataModel implements Student {
    @Prop()
    key: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName?: string;

    @Prop()
    email: string;

    @Prop({ enum: GenderType })
    gender: GenderType;

    @Prop()
    address: string;

    @Prop()
    dob: string;

    @Prop()
    classKey?: string;
}

export const StudentSchema = SchemaFactory.createForClass(StudentDataModel);
export type StudentDocument = StudentDataModel & Document;
