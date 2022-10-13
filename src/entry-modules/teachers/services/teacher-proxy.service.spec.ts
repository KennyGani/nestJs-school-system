import { TeacherDocument, TeacherRepository } from '../repositories';
import { TeacherProxyService } from './teacher-proxy.service';

describe('TeacherProxyService', () => {
    let teacherProxyService: TeacherProxyService;
    let teacherRepository: TeacherRepository;

    beforeEach(() => {
        teacherRepository = mockTeacherRepository();
        teacherProxyService = new TeacherProxyService(teacherRepository);
    });

    describe('getTeacherByKey', () => {
        it('should return as expected', async () => {
            const expectedResult = {} as TeacherDocument;
            teacherRepository.findOne = () => Promise.resolve(expectedResult);

            const result = await teacherProxyService.getTeacherByKey('key');

            expect(result).toBe(expectedResult);
        });
    });
});

function mockTeacherRepository(): TeacherRepository {
    return {} as TeacherRepository;
}
