import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RequestChangeStudentClassDtoInput {
    @ApiProperty({
        description: 'the name of the requester',
        required: true,
        nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    requesterName: string;

    @ApiProperty({
        description: 'the student key',
        required: true,
        nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    studentKey: string;

    @ApiProperty({
        description: 'the current class of the student',
        required: false,
        nullable: true,
    })
    @IsString()
    @IsOptional()
    currentClassKey?: string;

    @ApiProperty({
        description: 'the target class of the student',
        required: true,
        nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    targetClassKey: string;
}
