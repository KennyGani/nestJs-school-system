import { Test, TestingModule } from '@nestjs/testing';
import { TeacherManagementController } from './teacher-management.controller';

describe('TeacherManagementController', () => {
    let controller: TeacherManagementController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TeacherManagementController],
        }).compile();

        controller = module.get<TeacherManagementController>(
            TeacherManagementController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
