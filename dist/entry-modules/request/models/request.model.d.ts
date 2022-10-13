import { RequestType } from '../enums';
import { ChangeStudentClass } from './change-student-class.model';
import { ChangeHomeroomTeacher } from './change-homeroom-teacher.model';
export interface Request {
    requesterKey: string;
    requestType: RequestType;
    requestAction: ChangeStudentClass | ChangeHomeroomTeacher;
}
