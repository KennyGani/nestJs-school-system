import { ClassProxyService } from '../../classes/services/class-proxy.service';
import { StudentProxyService } from '../../students/services/student-proxy.service';
import { TeacherProxyService } from '../../teachers/services/teacher-proxy.service';
import { RequestRepository } from '../repositories';
export declare class RequestService {
    private readonly requestRepository;
    private readonly studentProxyService;
    private readonly classProxyService;
    private readonly teacherProxyService;
    constructor(requestRepository: RequestRepository, studentProxyService: StudentProxyService, classProxyService: ClassProxyService, teacherProxyService: TeacherProxyService);
    createRequestToChangeStudentClass(requesterName: string, studentKey: string, currentClassKey: string, targetClassKey: string): Promise<void>;
    createRequestToChangeHomeroomClass(requesterName: string, teacherKey: string, currentClassKey: string): Promise<void>;
}
