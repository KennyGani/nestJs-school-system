/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { EventPublisher } from '@nestjs/cqrs';

import { StudentAggregate } from '../../aggregates/student-management.aggregate';
import { GenderType } from '../../enums';
import { StudentAlreadyExistException } from '../../exceptions';
import { StudentManagement } from '../../models';
import { StudentManagementDocument, StudentManagementRepository } from '../../repositories';
import { CreateStudentCommand } from '../create-student.command';
import { CreateStudentCommandHandler } from './create-student.command-handler';

describe('CreateStudentCommandHandler', () => {
    let createStudentCommandHandler: CreateStudentCommandHandler;
    let studentManagementRepository: StudentManagementRepository;
    let eventPublisher: EventPublisher;

    beforeEach(() => {
        studentManagementRepository = mockStudentManagementRepository();
        createStudentCommandHandler = new CreateStudentCommandHandler(
            studentManagementRepository,
            eventPublisher,
        );
    });

    describe('createStudent', () => {
        it('should throw studentAlreadyExistException if the student already exist', async () => {
            const studentDB = {
                key: 'key',
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email@gmail.com',
                gender: GenderType.Female,
                address: 'address-12345',
                dob: '2022-08-09',
                classKey: 'classKey',
            } as StudentManagementDocument;

            studentManagementRepository.findStudentByKey = () =>
                Promise.resolve(studentDB);

            const createStudent = {
                key: 'key',
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email@gmail.com',
                gender: GenderType.Female,
                address: 'address-12345',
                dob: '2022-08-09',
                classKey: 'classKey',
            } as CreateStudentCommand;

            const fn = () => createStudentCommandHandler.execute(createStudent);

            await expect(fn()).rejects.toThrowError(
                StudentAlreadyExistException,
            );
        });

        it('should return as expected', async () => {
            const student: StudentManagement = {
                key: 'key',
                firstName: 'firstName',
                lastName: 'lastName',
                email: 'email@gmail.com',
                gender: GenderType.Female,
                address: 'address-12345',
                dob: '2022-08-09',
                classKey: 'classKey',
            };

            studentManagementRepository.findStudentByKey = () =>
                Promise.resolve(undefined);

            StudentAggregate.createAndConfigure = () =>
                student as StudentAggregate;

            const result = await createStudentCommandHandler.execute(
                {} as CreateStudentCommand,
            );

            expect(
                studentManagementRepository.createStudentAndCommitEvent,
            ).toBeCalledWith(student);

            expect(result).toBe(student);
        });
    });
});

function mockStudentManagementRepository(): StudentManagementRepository {
    const mock = {} as StudentManagementRepository;
    mock.createStudentAndCommitEvent = jest.fn();
    return mock;
}
