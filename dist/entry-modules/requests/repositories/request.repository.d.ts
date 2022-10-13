import { Model } from 'mongoose';
import { RequestAction } from '../types';
import { RequestDocument } from './request.schema';
export declare class RequestRepository {
    private readonly requestModel;
    constructor(requestModel: Model<RequestDocument>);
    create(requesterName: string, requesterType: string, requestAction: RequestAction): Promise<RequestDocument>;
}
