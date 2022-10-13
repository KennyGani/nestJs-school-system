import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('school')
        .setDescription('The school API')
        .setVersion('1.0.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('open-api', app, document);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}
bootstrap();
