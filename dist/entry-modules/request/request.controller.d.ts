import { RequestDtoInput } from './dtos';
import { RequestService } from './services';
export declare class RequestController {
    private readonly service;
    constructor(service: RequestService);
    createRequestChangeStudentClass(request: RequestDtoInput): Promise<void>;
    createRequestChangeHomeroomTeacher(request: RequestDtoInput): Promise<void>;
}
