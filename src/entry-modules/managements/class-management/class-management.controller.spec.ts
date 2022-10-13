import { Test, TestingModule } from '@nestjs/testing';
import { ClassManagementController } from './class-management.controller';

describe('ClassManagementController', () => {
    let controller: ClassManagementController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ClassManagementController],
        }).compile();

        controller = module.get<ClassManagementController>(
            ClassManagementController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
