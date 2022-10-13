import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RequestAction } from '../types';
import { RequestDataModel, RequestDocument } from './request.schema';

@Injectable()
export class RequestRepository {
    constructor(
        @InjectModel(RequestDataModel.name)
        private readonly requestModel: Model<RequestDocument>,
    ) {}

    public async create(
        requesterName: string,
        requesterType: string,
        requestAction: RequestAction,
    ): Promise<RequestDocument> {
        return await this.requestModel.create({
            requesterName: requesterName,
            requestType: requesterType,
            requestAction: requestAction,
        });
    }
}
