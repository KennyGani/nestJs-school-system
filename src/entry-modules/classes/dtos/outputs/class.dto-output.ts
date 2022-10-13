import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ClassDtoOutput {
    @IsNotEmpty()
    @ApiProperty({
        description: 'the key of the class',
        required: true,
        nullable: false,
    })
    key: string;

    @ApiProperty({
        description: 'the name of the class',
        required: true,
        nullable: false,
    })
    @IsNotEmpty()
    name: string;
}
