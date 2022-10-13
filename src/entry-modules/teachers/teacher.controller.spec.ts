import { GenderType } from './enums';
import { TeacherDocument } from './repositories';
import { TeacherService } from './services';
import { TeacherController } from './teacher.controller';

describe('TeacherController', () => {
    let teacherController: TeacherController;
    let teacherService: TeacherService;

    beforeEach(() => {
        teacherService = mockTeacherService();
        teacherController = new TeacherController(teacherService);
    });

    describe('getAllTeachers', () => {
        it('should return all teacher', async () => {
            teacherService.getAllTeachers = () =>
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

            const result = await teacherController.getAllTeachers();

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

    describe('getTeacher', () => {
        it('should return as expected', async () => {
            teacherService.getTeacherByKey = () =>
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

            const result = await teacherController.getTeacher('teacherKey-123');

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
});

function mockTeacherService(): TeacherService {
    return {} as TeacherService;
}
