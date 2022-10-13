import { RequestsRepository } from '../repositories';
export declare class RequestService {
    private readonly requestRepository;
    constructor(requestRepository: RequestsRepository);
    createRequestToChangeStudentClass(requesterKey: string, currentClass: string, targetClass: string): Promise<void>;
    createRequestToChangeHomeroomClass(requesterKey: string, currentClass: string): Promise<void>;
}
