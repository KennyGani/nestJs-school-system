import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ClassDtoOutput } from './dtos';
import { ClassService } from './services';

@ApiTags('class')
@Controller('class')
export class ClassController {
    constructor(private readonly service: ClassService) {}

    //get all class data
    @Get('/:classKey')
    @HttpCode(200)
    @ApiOkResponse({ type: ClassDtoOutput })
    @ApiNotFoundResponse()
    @ApiBadRequestResponse()
    public async getClass(
        @Param('classKey') classKey: string,
    ): Promise<ClassDtoOutput> {
        const classObject = await this.service.getClassByKey(classKey);

        return {
            key: classObject.key,
            name: classObject.name,
        };
    }
}
