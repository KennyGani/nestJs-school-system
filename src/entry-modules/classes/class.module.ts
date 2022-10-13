import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassDataModel, ClassRepository, ClassSchema } from './repositories';
import { ClassService } from './services';
import { ClassController } from './class.controller';
import { ClassProxyService } from './services/class-proxy.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: ClassDataModel.name, schema: ClassSchema },
        ]),
    ],
    controllers: [ClassController],
    providers: [ClassRepository, ClassService, ClassProxyService],
    exports: [ClassProxyService],
})
export class ClassModule {}
