import { Injectable } from '@nestjs/common';
import { ClassProxyService } from '../../classes/services/class-proxy.service';
import { StudentProxyService } from '../../students/services/student-proxy.service';
import { TeacherProxyService } from '../../teachers/services/teacher-proxy.service';
import { RequestType } from '../enums';
import {
    ClassDoesNotExistException,
    CurrentClassDoesNotMatchWithActualClassException,
    StudentDoesNotExistException,
    TeacherDoesNotExistException,
} from '../exceptions';
import { ChangeHomeroomTeacher, ChangeStudentClass } from '../models';
import { RequestRepository } from '../repositories';

@Injectable()
export class RequestService {
    constructor(
        private readonly requestRepository: RequestRepository,
        private readonly studentProxyService: StudentProxyService,
        private readonly classProxyService: ClassProxyService,
        private readonly teacherProxyService: TeacherProxyService,
    ) {}

    public async createRequestToChangeStudentClass(
        requesterName: string,
        studentKey: string,
        currentClassKey: string,
        targetClassKey: string,
    ): Promise<void> {
        const student = await this.studentProxyService.getStudentByKey(
            studentKey,
        );

        if (!student) {
            throw new StudentDoesNotExistException(studentKey);
        }

        const doesTargetClassExist =
            await this.classProxyService.doesClassExist(targetClassKey);

        if (!doesTargetClassExist) {
            throw new ClassDoesNotExistException(targetClassKey);
        }

        if (student.classKey !== currentClassKey) {
            throw new CurrentClassDoesNotMatchWithActualClassException(
                currentClassKey,
            );
        }

        await this.requestRepository.create(
            requesterName,
            RequestType.ChangeStudentClass,
            {
                studentKey: studentKey,
                currentClassKey: currentClassKey,
                targetClassKey: targetClassKey,
            } as ChangeStudentClass,
        );
    }

    public async createRequestToChangeHomeroomClass(
        requesterName: string,
        teacherKey: string,
        currentClassKey: string,
    ): Promise<void> {
        const teacher = await this.teacherProxyService.getTeacherByKey(
            teacherKey,
        );

        if (!teacher) {
            throw new TeacherDoesNotExistException(teacherKey);
        }

        if (teacher.classKey !== currentClassKey) {
            throw new CurrentClassDoesNotMatchWithActualClassException(
                currentClassKey,
            );
        }

        await this.requestRepository.create(
            requesterName,
            RequestType.ChangeHomeroomTeacher,
            {
                teacherKey: teacherKey,
                currentClassKey: currentClassKey,
            } as ChangeHomeroomTeacher,
        );
    }
}
