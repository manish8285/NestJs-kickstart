import { Module, NestModule } from '@nestjs/common';
import { Permission, Role, User, VerificationToken } from './schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'configuration/properties';
import { PermissionRepository, RolePermissionRepository, RoleRepository, UserRepository, UserRoleRepository, VerificationTokenRepository } from './repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(config[process.env.NODE_ENV]["ormConfig"]),
    TypeOrmModule.forFeature([User, Permission, Role,VerificationToken])
  ],
  providers: [
    UserRepository,
    PermissionRepository,
    RoleRepository,
    UserRoleRepository,
    RolePermissionRepository,
    VerificationTokenRepository
  ],
  exports: [
    TypeOrmModule,
    UserRepository,
    PermissionRepository,
    RoleRepository,
    UserRoleRepository,
    RolePermissionRepository,
    VerificationTokenRepository
  ]
})
export class ModelsModule implements NestModule {
  public configure() {}
}