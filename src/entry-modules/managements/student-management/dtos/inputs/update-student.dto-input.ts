import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

import { GenderType } from '../../enums';

export class UpdateStudentDtoInput {
    @IsNotEmpty()
    @ApiProperty({
        description: 'the current key of the student',
        required: true,
        nullable: false,
    })
    currentKey: string;

    @IsOptional()
    @ApiProperty({
        description: 'the new key of the student',
        required: false,
        nullable: true,
    })
    newKey: string;

    @ApiProperty({
        description: 'the first name of the student',
        required: false,
        nullable: true,
    })
    @IsString()
    @IsOptional()
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
        required: false,
        nullable: true,
    })
    @IsOptional()
    email: string;

    @ApiProperty({
        description: 'the gender of the student',
        required: false,
        nullable: true,
        enum: Object.values(GenderType),
    })
    @IsEnum(GenderType)
    @IsOptional()
    gender: GenderType;

    @ApiProperty({
        description: 'the address of the student',
        required: false,
        nullable: true,
    })
    @IsOptional()
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
    @IsOptional()
    dob: string;

    @ApiProperty({
        description: 'the class of the student',
        required: false,
        nullable: true,
    })
    @IsOptional()
    classKey?: string;
}
