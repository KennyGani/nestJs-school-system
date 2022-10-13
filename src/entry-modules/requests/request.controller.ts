import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import {
    RequestChangeHomeroomTeacherDtoInput,
    RequestChangeStudentClassDtoInput,
} from './dtos';
import { RequestService } from './services';

@ApiTags('request')
@Controller('request')
export class RequestController {
    constructor(private readonly service: RequestService) {}

    @Post('/change-student-class')
    @HttpCode(201)
    @ApiBody({ type: RequestChangeStudentClassDtoInput })
    @ApiCreatedResponse()
    public async createRequestChangeStudentClass(
        @Body() request: RequestChangeStudentClassDtoInput,
    ): Promise<void> {
        await this.service.createRequestToChangeStudentClass(
            request.requesterName,
            request.studentKey,
            request.currentClassKey,
            request.targetClassKey,
        );
    }

    @Post('/change-homeroom-teacher')
    @HttpCode(201)
    @ApiBody({ type: RequestChangeHomeroomTeacherDtoInput })
    @ApiCreatedResponse()
    public async createRequestChangeHomeroomTeacher(
        @Body() request: RequestChangeHomeroomTeacherDtoInput,
    ): Promise<void> {
        await this.service.createRequestToChangeHomeroomClass(
            request.requesterName,
            request.teacherKey,
            request.currentClassKey,
        );
    }
}
