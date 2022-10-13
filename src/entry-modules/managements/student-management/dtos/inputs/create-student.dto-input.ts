import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

import { GenderType } from '../../enums';

export class CreateStudentDtoInput {
    @IsNotEmpty()
    @ApiProperty({
        description: 'the key of the student',
        required: true,
        nullable: false,
    })
    key: string;

    @ApiProperty({
        description: 'the first name of the student',
        required: true,
        nullable: false,
    })
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({
        description: 'the last name of the student',
        required: false,
        nullable: true,
    })
    @IsString()
    @IsOptional()
    lastName?: string;

    @ApiProperty({
        description: 'the email of the student',
        required: true,
        nullable: false,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        description: 'the gender of the student',
        required: true,
        nullable: false,
        enum: Object.values(GenderType),
    })
    @IsEnum(GenderType)
    gender: GenderType;

    @ApiProperty({
        description: 'the address of the student',
        required: true,
        nullable: false,
    })
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    @MinLength(10)
    address: string;

    @ApiProperty({
        description: 'the dob of the student',
        required: true,
        nullable: false,
    })
    // @Matches(/^\d{4}(-)(((0)[0-9])|((1)[0-2]))(-)([0-2][0-9]|(3)[0-1])$/i, {
    //     message: '$dob must be formatted as yyyy-mm-dd',
    // })
    @IsDateString()
    dob: string;

    @ApiProperty({
        description: 'the class of the student',
        required: false,
        nullable: true,
    })
    @IsOptional()
    classKey?: string;
}
