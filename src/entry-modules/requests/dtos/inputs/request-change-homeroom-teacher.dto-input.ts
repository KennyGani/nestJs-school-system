import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RequestChangeHomeroomTeacherDtoInput {
    @ApiProperty({
        description: 'the name of the requester',
        required: true,
        nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    requesterName: string;

    @ApiProperty({
        description: 'the teacher key',
        required: true,
        nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    teacherKey: string;

    @ApiProperty({
        description: 'the current class of the student',
        required: false,
        nullable: true,
    })
    @IsString()
    @IsOptional()
    currentClassKey?: string;
}
