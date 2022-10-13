import { ClassRepository } from '../repositories';
import { ClassProxyService } from './class-proxy.service';

describe('ClassProxyService', () => {
    let classProxyService: ClassProxyService;
    let classRepository: ClassRepository;

    beforeEach(() => {
        classRepository = mockClassRepository();
        classProxyService = new ClassProxyService(classRepository);
    });

    describe('doesClassExist', () => {
        it('should return as expected', async () => {
            classRepository.findOne = () => Promise.resolve(undefined);

            const result = await classProxyService.doesClassExist('key');

            expect(result).toBe(false);
        });
    });
});
function mockClassRepository(): ClassRepository {
    return {} as ClassRepository;
}
