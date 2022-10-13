/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { GenderType } from '../enums';
import { StudentNotFoundException } from '../exceptions';
import { StudentDocument, StudentRepository } from '../repositories';
import { StudentService } from './student.service';

describe('StudentService', () => {
    let studentService: StudentService;
    let studentRepository: StudentRepository;

    beforeEach(() => {
        studentRepository = mockStudentRepository();
        studentService = new StudentService(studentRepository);
    });

    describe('getStudentByKey', () => {
        it('should throw StudentNotFoundException if student does not exist', async () => {
            studentRepository.findOne = () => Promise.resolve(undefined);

            const fn = () => studentService.getStudentByKey('classKey');

            await expect(fn()).rejects.toThrowError(StudentNotFoundException);
        });

        it('should return as expected', async () => {
            studentRepository.findOne = () =>
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

            const result = await studentService.getStudentByKey('key');

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

    describe('getAllStudentInClassWithClassKey', () => {
        it('should throw StudentNotFoundException if no student exist in class with given classKey', async () => {
            studentRepository.findAllStudentsForClass = () =>
                Promise.resolve([]);

            const fn = () => studentService.getAllStudentsForClass('classKey');

            await expect(fn()).rejects.toThrowError(StudentNotFoundException);
        });

        it('should return as expected', async () => {
            studentRepository.findAllStudentsForClass = () =>
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

            const result = await studentService.getAllStudentsForClass('key');

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
});

function mockStudentRepository(): StudentRepository {
    return {} as StudentRepository;
}
