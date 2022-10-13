/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { StudentDocument, StudentRepository } from '../repositories';
import { StudentProxyService } from './student-proxy.service';

describe('StudentProxyService', () => {
    let studentProxyService: StudentProxyService;
    let studentRepository: StudentRepository;

    beforeEach(() => {
        studentRepository = mockStudentRepository();
        studentProxyService = new StudentProxyService(studentRepository);
    });

    describe('getStudentByKey', () => {
        it('should return as expected', async () => {
            const expectedResult = {} as StudentDocument;
            studentRepository.findOne = () => Promise.resolve(expectedResult);

            const result = await studentProxyService.getStudentByKey('key');

            expect(result).toBe(expectedResult);
        });
    });
});

function mockStudentRepository(): StudentRepository {
    return {} as StudentRepository;
}
