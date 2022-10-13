import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Class } from '../models';

@Schema({ collection: 'classes' })
export class ClassDataModel implements Class {
    @Prop()
    key: string;

    @Prop()
    name: string;
}

export const ClassSchema = SchemaFactory.createForClass(ClassDataModel);
export type ClassDocument = ClassDataModel & Document;
