import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { UserModule } from './src/user/user.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { LoggerModule } from './utils/logger/logger.module';
import { FilterModule } from './utils/filters/filter.module';
import { ConfigModule } from './configuration/config.module';
import { JwtModule } from '@nestjs/jwt';
import { BootstrapService } from './bootstrap.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { UtilsModule } from './utils/utils.module';
import { ModelsModule } from 'models/models.module';
import config from './configuration/properties';

@Module({
  imports: [
    UserModule,
    ModelsModule,
    MiddlewareModule,
    LoggerModule,
    FilterModule,
    ConfigModule,
    JwtModule.register({}),
    UtilsModule,
    MailerModule.forRoot(config[process.env.NODE_ENV]['emailConfig']),
  ],
  controllers: [AppController],
  providers: [AppService, BootstrapService],
})
export class AppModule {
  constructor() {}
}
