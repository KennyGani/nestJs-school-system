import { Model } from 'mongoose';
import { StudentDataModel } from './student.schema';
import { StudentDocument } from './student.schema';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentsService {
    private studentModel;
    constructor(studentModel: Model<StudentDocument>);
    create(createStudentDto: CreateStudentDto): Promise<StudentDataModel>;
    findAll(): Promise<StudentDataModel[]>;
}
