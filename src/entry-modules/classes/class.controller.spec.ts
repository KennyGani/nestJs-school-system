import { ClassController } from './class.controller';
import { ClassDocument } from './repositories';
import { ClassService } from './services';

describe('ClassController', () => {
    let classController: ClassController;
    let classService: ClassService;

    beforeEach(() => {
        classService = mockClassService();
        classController = new ClassController(classService);
    });

    describe('getClassByKey', () => {
        it('should return as expected', async () => {
            classService.getClassByKey = () =>
                Promise.resolve({
                    key: 'key-123',
                    name: 'name-12345',
                } as ClassDocument);

            const result = await classController.getClass('key-123');

            expect(result).toStrictEqual({
                key: 'key-123',
                name: 'name-12345',
            });
        });
    });
});
function mockClassService(): ClassService {
    return {} as ClassService;
}
