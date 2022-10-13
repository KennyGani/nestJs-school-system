import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { GenderType } from '../enums';
import { StudentManagement } from '../models';

@Schema({ collection: 'student-management' })
export class StudentManagementDataModel implements StudentManagement {
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

    @Prop()
    createdAt?: Date;

    @Prop()
    updatedAt?: Date;
}

export const StudentManagementSchema = SchemaFactory.createForClass(
    StudentManagementDataModel,
);
export type StudentManagementDocument = StudentManagementDataModel & Document;
