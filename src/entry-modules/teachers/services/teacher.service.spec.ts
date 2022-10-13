import { NotFoundException } from '@nestjs/common';

import { GenderType } from '../enums';
import { TeacherNotFoundException } from '../exceptions';
import { TeacherDocument, TeacherRepository } from '../repositories';
import { TeacherService } from './teacher.service';

describe('TeacherService', () => {
    let teacherService: TeacherService;
    let teacherRepository: TeacherRepository;

    beforeEach(() => {
        teacherRepository = mockTeacherRepository();
        teacherService = new TeacherService(teacherRepository);
    });

    describe('getTeacherByKey', () => {
        it('should throw NotFoundException if teacher does not exist', async () => {
            teacherRepository.findOne = () => Promise.resolve(undefined);

            const fn = () => teacherService.getTeacherByKey('key');

            await expect(fn()).rejects.toThrowError(NotFoundException);
        });

        it('should return as expected', async () => {
            teacherRepository.findOne = () =>
                Promise.resolve({
                    address: 'address-123',
                    dob: new Date('2003-02-01'),
                    email: 'email-123',
                    gender: GenderType.Female,
                    firstName: 'fname-123',
                    lastName: 'lname-123',
                    key: 'teacherKey-123',
                    classKey: 'classKey-123',
                } as TeacherDocument);

            const result = await teacherService.getTeacherByKey('key');

            expect(result).toStrictEqual({
                address: 'address-123',
                dob: new Date('2003-02-01'),
                email: 'email-123',
                gender: GenderType.Female,
                firstName: 'fname-123',
                lastName: 'lname-123',
                key: 'teacherKey-123',
                classKey: 'classKey-123',
            });
        });
    });

    describe('getAllTeacherInClassWithClassKey', () => {
        it('should throw TeacherNotFoundException if no teacher exist', async () => {
            teacherRepository.findAllTeachers = () => Promise.resolve([]);

            const fn = () => teacherService.getAllTeachers();

            await expect(fn()).rejects.toThrowError(TeacherNotFoundException);
        });

        it('should return as expected', async () => {
            teacherRepository.findAllTeachers = () =>
                Promise.resolve([
                    {
                        firstName: 'fname-123',
                        lastName: 'lname-123',
                        address: 'address-123',
                        dob: new Date('2003-02-01'),
                        email: 'email-123',
                        gender: GenderType.Female,
                        key: 'teacherKey-123',
                        classKey: 'classKey-123',
                    } as TeacherDocument,
                    {
                        firstName: 'fname-124',
                        lastName: 'lname-124',
                        address: 'address-124',
                        dob: new Date('2003-02-02'),
                        email: 'email-124',
                        gender: GenderType.Male,
                        key: 'teacherKey-124',
                        classKey: 'classKey-124',
                    } as TeacherDocument,
                ]);

            const result = await teacherService.getAllTeachers();

            expect(result).toStrictEqual([
                {
                    firstName: 'fname-123',
                    lastName: 'lname-123',
                    address: 'address-123',
                    dob: new Date('2003-02-01'),
                    email: 'email-123',
                    gender: GenderType.Female,
                    key: 'teacherKey-123',
                    classKey: 'classKey-123',
                },
                {
                    firstName: 'fname-124',
                    lastName: 'lname-124',
                    address: 'address-124',
                    dob: new Date('2003-02-02'),
                    email: 'email-124',
                    gender: GenderType.Male,
                    key: 'teacherKey-124',
                    classKey: 'classKey-124',
                },
            ]);
        });
    });
});

function mockTeacherRepository(): TeacherRepository {
    return {} as TeacherRepository;
}
