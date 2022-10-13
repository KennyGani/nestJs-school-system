import {
    RequestChangeHomeroomTeacherDtoInput,
    RequestChangeStudentClassDtoInput,
} from './dtos';
import { RequestController } from './request.controller';
import { RequestService } from './services';

describe('RequestController', () => {
    let requestController: RequestController;
    let requestService: RequestService;

    beforeEach(() => {
        requestService = mockRequestService();
        requestController = new RequestController(requestService);
    });

    describe('changeStudentClass', () => {
        it('should send the exact value given', async () => {
            const request = {
                requesterName: 'name-123',
                studentKey: 'skey-123',
                currentClassKey: 'currclass-123',
                targetClassKey: 'targetclass-123',
            } as RequestChangeStudentClassDtoInput;

            await requestController.createRequestChangeStudentClass(request);

            expect(
                requestService.createRequestToChangeStudentClass,
            ).toBeCalledWith(
                request.requesterName,
                request.studentKey,
                request.currentClassKey,
                request.targetClassKey,
            );
        });
    });

    describe('changeHomeroomTeacher', () => {
        it('should send the exact value given', async () => {
            const request = {
                requesterName: 'name-123',
                teacherKey: 'tkey-123',
                currentClassKey: 'currclass-123',
            } as RequestChangeHomeroomTeacherDtoInput;

            await requestController.createRequestChangeHomeroomTeacher(request);

            expect(
                requestService.createRequestToChangeHomeroomClass,
            ).toBeCalledWith(
                request.requesterName,
                request.teacherKey,
                request.currentClassKey,
            );
        });
    });
});

function mockRequestService(): RequestService {
    const mock = {} as RequestService;
    mock.createRequestToChangeStudentClass = jest.fn();
    mock.createRequestToChangeHomeroomClass = jest.fn();

    return mock;
}
