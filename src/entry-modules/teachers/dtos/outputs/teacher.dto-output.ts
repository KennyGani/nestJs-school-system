import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

import { GenderType } from '../../enums';

export class TeacherDtoOutput {
    @IsNotEmpty()
    @ApiProperty({
        description: 'the key of the teacher',
        required: true,
        nullable: false,
    })
    key: string;

    @ApiProperty({
        description: 'the first name of the teacher',
        required: true,
        nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        description: 'the last name of the teacher',
        required: false,
        nullable: true,
    })
    @IsString()
    @IsOptional()
    lastName?: string;

    @ApiProperty({
        description: 'the email of the teacher',
        required: true,
        nullable: false,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'the gender of the teacher',
        required: true,
        nullable: false,
        enum: Object.values(GenderType),
    })
    @IsEnum(GenderType)
    gender: GenderType;

    @ApiProperty({
        description: 'the address of the teacher',
        required: true,
        nullable: false,
    })
    @MinLength(10)
    address: string;

    @ApiProperty({
        description: 'the dob of the teacher',
        required: true,
        nullable: false,
    })
    @IsDate()
    dob: Date;

    @ApiProperty({
        description: 'the homeroom class of the teacher',
        required: false,
        nullable: true,
    })
    @IsString()
    @IsOptional()
    classKey?: string;
}
