import { Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerModule } from 'utils/logger/logger.module';
import { FilterModule } from 'utils/filters/filter.module';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { UtilsModule } from 'utils/utils.module';
import { ConfigModule } from './../../configuration/config.module';
import { MiddlewareModule } from 'middleware/middleware.module';
import { ModelsModule } from 'models/models.module';

@Module({
  imports: [
    ModelsModule,
    LoggerModule,
    FilterModule,
    UtilsModule,
    ConfigModule,
    MiddlewareModule,
  ],
  providers: [UserService, PermissionService, RoleService],
  controllers: [UserController, PermissionController, RoleController],
  exports: [UserService],
})
export class UserModule implements NestModule {
  public configure() {}
}
