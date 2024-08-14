import { Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoggerModule } from "utils/logger/logger.module";
import { FilterModule } from "utils/filters/filter.module";
import { AuthService } from "middleware/auth.service";
import { SecurityController } from "middleware/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "../configuration/config.module";
import { AuthGuard } from "./auth/authGuard.middleware";
import { AuthenticationMiddleware } from "./auth/authentication.middleware";
import { User } from 'models/schema/user.entity';
import { ModelsModule } from 'models/models.module';
import config from 'configuration/properties';
import { Redis } from 'ioredis';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        LoggerModule,
        FilterModule,
        ConfigModule,
        ModelsModule,
        JwtModule.register({}),
        // Removed RedisModule from imports as we're now using ioredis directly
    ],
    providers: [AuthService, AuthGuard, AuthenticationMiddleware,{
        provide: 'REDIS_CLIENT',
        useFactory: () => {
          const redisConfig = config[process.env.NODE_ENV]['redis'];
          return new Redis(redisConfig);
        },
      },],
    controllers: [
        SecurityController
    ],
    exports: [
        AuthService,
        AuthGuard,
        AuthenticationMiddleware,
        LoggerModule,
        JwtModule.register({}),
    ]
})
export class MiddlewareModule implements NestModule {
    public configure() {
        // Any middleware configuration can go here if needed
    }
}
