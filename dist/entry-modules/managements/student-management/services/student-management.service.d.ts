import { StudentProxyService } from '../../../students/services/student-proxy.service';
import { GenderType } from '../enums';
import { StudentManagementRepository } from '../repositories';
export declare class StudentManagementService {
    private readonly studentManagementRepository;
    private readonly studentProxyService;
    constructor(studentManagementRepository: StudentManagementRepository, studentProxyService: StudentProxyService);
    createStudent(key: string, firstName: string, lastName: string, email: string, gender: GenderType, address: string, dob: string, classKey: string): Promise<void>;
}
