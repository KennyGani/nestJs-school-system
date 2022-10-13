import { RequestChangeHomeroomTeacherDtoInput, RequestChangeStudentClassDtoInput } from './dtos';
import { RequestService } from './services';
export declare class RequestController {
    private readonly service;
    constructor(service: RequestService);
    createRequestChangeStudentClass(request: RequestChangeStudentClassDtoInput): Promise<void>;
    createRequestChangeHomeroomTeacher(request: RequestChangeHomeroomTeacherDtoInput): Promise<void>;
}
