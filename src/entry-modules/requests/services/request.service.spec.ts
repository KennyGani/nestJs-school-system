import { ClassProxyService } from '../../classes/services/class-proxy.service';
import { Student } from '../../students/models';
import { StudentProxyService } from '../../students/services/student-proxy.service';
import { Teacher } from '../../teachers/models';
import { TeacherProxyService } from '../../teachers/services/teacher-proxy.service';
import { RequestType } from '../enums';
import {
    ClassDoesNotExistException,
    CurrentClassDoesNotMatchWithActualClassException,
    StudentDoesNotExistException,
    TeacherDoesNotExistException,
} from '../exceptions';
import { RequestRepository } from '../repositories';
import { RequestService } from './request.service';

describe('RequestService', () => {
    let service: RequestService;
    let requestRepository: RequestRepository;
    let studentProxyService: StudentProxyService;
    let classProxyService: ClassProxyService;
    let teacherProxyService: TeacherProxyService;

    beforeEach(() => {
        requestRepository = mockRequestRepository();
        studentProxyService = mockStudentProxyService();
        classProxyService = mockClassProxyService();
        teacherProxyService = mockTeacherProxyService();
        service = new RequestService(
            requestRepository,
            studentProxyService,
            classProxyService,
            teacherProxyService,
        );
    });

    describe('createRequestToChangeStudentClass', () => {
        it('should throw StudentDoesNotExistException if student does not exist', async () => {
            studentProxyService.getStudentByKey = () =>
                Promise.resolve(undefined);

            const fn = () =>
                service.createRequestToChangeStudentClass(
                    'requester-123',
                    'student-123',
                    'class-123',
                    'class-456',
                );

            await expect(fn()).rejects.toThrowError(
                StudentDoesNotExistException,
            );
        });

        it('should throw ClassDoesNotExistException if target class does not exist', async () => {
            classProxyService.doesClassExist = () => Promise.resolve(false);

            const fn = () =>
                service.createRequestToChangeStudentClass(
                    'requester-123',
                    'student-123',
                    'class-123',
                    'class-456',
                );

            await expect(fn()).rejects.toThrowError(ClassDoesNotExistException);
        });

        it('should throw CurrentClassDoesNotMatchWithActualClassException if current class key does not match with student current class key', async () => {
            studentProxyService.getStudentByKey = () =>
                Promise.resolve({ classKey: 'class-0' } as Student);

            const fn = () =>
                service.createRequestToChangeStudentClass(
                    'requester-123',
                    'student-123',
                    'class-123',
                    'class-456',
                );

            await expect(fn()).rejects.toThrowError(
                CurrentClassDoesNotMatchWithActualClassException,
            );
        });

        it('should create the student data with expected argument via the repository', async () => {
            requestRepository.create = jest.fn();

            await service.createRequestToChangeStudentClass(
                'requester-123',
                'student-123',
                'class-123',
                'class-456',
            );

            expect(requestRepository.create).toBeCalledWith(
                'requester-123',
                RequestType.ChangeStudentClass,
                {
                    studentKey: 'student-123',
                    currentClassKey: 'class-123',
                    targetClassKey: 'class-456',
                },
            );
        });
    });

    describe('createRequestToChangeHomeroomClass', () => {
        it('should throw TeacherDoesNotExistException if student does not exist', async () => {
            teacherProxyService.getTeacherByKey = () =>
                Promise.resolve(undefined);

            const fn = () =>
                service.createRequestToChangeHomeroomClass(
                    'requester-123',
                    'teacher-123',
                    'class-123',
                );

            await expect(fn()).rejects.toThrowError(
                TeacherDoesNotExistException,
            );
        });

        it('should throw CurrentClassDoesNotMatchWithActualClassException if current class key does not match with student current class key', async () => {
            teacherProxyService.getTeacherByKey = () =>
                Promise.resolve({ classKey: 'class-0' } as Student);

            const fn = () =>
                service.createRequestToChangeHomeroomClass(
                    'requester-123',
                    'teacher-123',
                    'class-123',
                );

            await expect(fn()).rejects.toThrowError(
                CurrentClassDoesNotMatchWithActualClassException,
            );
        });

        it('should create the teacher data with expected argument via the repository', async () => {
            requestRepository.create = jest.fn();

            await service.createRequestToChangeHomeroomClass(
                'requester-123',
                'teacher-123',
                'class-123',
            );

            expect(requestRepository.create).toBeCalledWith(
                'requester-123',
                RequestType.ChangeHomeroomTeacher,
                {
                    teacherKey: 'teacher-123',
                    currentClassKey: 'class-123',
                },
            );
        });
    });
});

function mockClassProxyService(): ClassProxyService {
    const mock = {} as ClassProxyService;
    mock.doesClassExist = () => Promise.resolve(true);
    return mock;
}

function mockStudentProxyService(): StudentProxyService {
    const mock = {} as StudentProxyService;
    mock.getStudentByKey = () =>
        Promise.resolve({ classKey: 'class-123' } as Student);
    return mock;
}

function mockRequestRepository(): RequestRepository {
    return {} as RequestRepository;
}
function mockTeacherProxyService(): TeacherProxyService {
    const mock = {} as TeacherProxyService;
    mock.getTeacherByKey = () =>
        Promise.resolve({ classKey: 'class-123' } as Teacher);
    return mock;
}
