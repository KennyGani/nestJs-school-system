/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { GenderType } from './enums';
import { StudentDocument } from './repositories';
import { StudentService } from './services';
import { StudentController } from './student.controller';

describe('StudentController', () => {
    let studentController: StudentController;
    let studentService: StudentService;

    beforeEach(() => {
        studentService = mockStudentService();
        studentController = new StudentController(studentService);
    });

    describe('getAllStudentForClass', () => {
        it('should return student with exact class key', async () => {
            studentService.getAllStudentsForClass = () =>
                Promise.resolve([
                    {
                        firstName: 'fname-123',
                        lastName: 'lname-123',
                        address: 'address-123',
                        dob: '2003-02-01',
                        email: 'email-123',
                        gender: GenderType.Female,
                        key: 'studentKey-123',
                        classKey: 'classKey-123',
                    } as StudentDocument,
                    {
                        firstName: 'fname-124',
                        lastName: 'lname-124',
                        address: 'address-124',
                        dob: '2003-02-02',
                        email: 'email-124',
                        gender: GenderType.Male,
                        key: 'studentKey-124',
                        classKey: 'classKey-124',
                    } as StudentDocument,
                ]);

            const result = await studentController.getAllStudentsForClass({
                classKey: 'classKey-124',
            });

            expect(result).toStrictEqual([
                {
                    firstName: 'fname-123',
                    lastName: 'lname-123',
                    address: 'address-123',
                    dob: '2003-02-01',
                    email: 'email-123',
                    gender: GenderType.Female,
                    key: 'studentKey-123',
                    classKey: 'classKey-123',
                },
                {
                    firstName: 'fname-124',
                    lastName: 'lname-124',
                    address: 'address-124',
                    dob: '2003-02-02',
                    email: 'email-124',
                    gender: GenderType.Male,
                    key: 'studentKey-124',
                    classKey: 'classKey-124',
                },
            ]);
        });
    });

    describe('getStudent', () => {
        it('should return as expected', async () => {
            studentService.getStudentByKey = () =>
                Promise.resolve({
                    address: 'address-123',
                    dob: '2003-02-01',
                    email: 'email-123',
                    gender: GenderType.Female,
                    firstName: 'fname-123',
                    lastName: 'lname-123',
                    key: 'studentKey-123',
                    classKey: 'classKey-123',
                } as StudentDocument);

            const result = await studentController.getStudent('studentKey-123');

            expect(result).toStrictEqual({
                address: 'address-123',
                dob: '2003-02-01',
                email: 'email-123',
                gender: GenderType.Female,
                firstName: 'fname-123',
                lastName: 'lname-123',
                key: 'studentKey-123',
                classKey: 'classKey-123',
            });
        });
    });
});

function mockStudentService(): StudentService {
    return {} as StudentService;
}
