import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GenderType } from '../enums';
import { Teacher } from '../models';

@Schema({ collection: 'teachers' })
export class TeacherDataModel implements Teacher {
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
    dob: Date;

    @Prop()
    classKey?: string;
}

export const TeacherSchema = SchemaFactory.createForClass(TeacherDataModel);
export type TeacherDocument = TeacherDataModel & Document;
