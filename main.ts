// import * as dotenv from 'dotenv';
require('dotenv').config({ path: `.env` });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RuntimeExceptionFilter } from 'utils/filters/runtimeException.filter';
import { CustomLogger } from 'utils/logger/custom-logger.service';
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import { AuthGuard } from './middleware/auth/authGuard.middleware';
import { BootstrapService } from './bootstrap.service';

declare const module: any;

async function bootstrap() {
  // dotenv.config({ path: `../${process.env.NODE_ENV}.env` })
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'debug', 'warn'],
  });
  app.useGlobalFilters(app.get(RuntimeExceptionFilter));
  app.useLogger(app.get(CustomLogger));

  //enable cors for all roots
  app.enableCors()
  app.setGlobalPrefix("api")

  const options = new DocumentBuilder()
    .setTitle('X SECURITY')
    .setDescription('The Boilerplate API description')
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header'
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )

    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/doc', app, document)
  //console.log(document)
  let bootstrapService = app.get(BootstrapService);
  bootstrapService.createAdmin();
  const port = process.env.PORT || 6000;
  await app.listen(port, () => { console.log("app is running on port" + port) });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();
