import mongoose from 'mongoose';

import { Class } from '../../src/entry-modules/classes/models';
import { ClassDocument, ClassSchema } from '../../src/entry-modules/classes/repositories';

export class ClassCollection {
    private readonly classModel: mongoose.Model<ClassDocument, unknown>;

    constructor() {
        this.classModel = mongoose.model<ClassDocument>('class', ClassSchema);
    }

    public async create(key: string, name: string): Promise<Class> {
        return await this.classModel.create({
            key: key,
            name: name,
        });
    }
}
