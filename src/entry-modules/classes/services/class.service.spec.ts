import { NotFoundException } from '@nestjs/common';

import { ClassDocument, ClassRepository } from '../repositories';
import { ClassService } from './class.service';

describe('ClassService', () => {
    let classService: ClassService;
    let classRepository: ClassRepository;

    beforeEach(() => {
        classRepository = mockClassRepository();
        classService = new ClassService(classRepository);
    });

    describe('getClassByKey', () => {
        it('should throw NotFoundException if class does not exist', async () => {
            classRepository.findOne = () => Promise.resolve(undefined);

            const fn = () => classService.getClassByKey('key');

            await expect(fn()).rejects.toThrowError(NotFoundException);
        });

        it('should return as expected', async () => {
            classRepository.findOne = () =>
                Promise.resolve({
                    key: 'key-123',
                    name: 'name-12345',
                } as ClassDocument);

            const result = await classService.getClassByKey('key');

            expect(result).toStrictEqual({
                key: 'key-123',
                name: 'name-12345',
            });
        });
    });
});

function mockClassRepository(): ClassRepository {
    return {} as ClassRepository;
}
