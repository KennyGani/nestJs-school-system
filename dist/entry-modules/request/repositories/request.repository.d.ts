import { Model } from 'mongoose';
import { RequestAction } from '../types';
import { RequestDocument } from './request.schema';
export declare class RequestsRepository {
    private requestModel;
    constructor(requestModel: Model<RequestDocument>);
    findOne(requestKey: string): Promise<RequestDocument | undefined>;
    create(requesterKey: string, requesterType: string, requestAction: RequestAction): Promise<RequestDocument>;
}
