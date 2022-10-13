import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AllStudentDtoInput {
    @ApiProperty({
        description: 'the class of the student',
        required: true,
        nullable: false,
    })
    @IsNotEmpty()
    classKey: string;
}
