import { Injectable } from '@nestjs/common';
import { CustomLogger } from 'utils/logger/custom-logger.service';
import { IRole } from './role.interface';
import { AssignPermissionsToRoleDto, RoleReqDto, RoleResDto } from 'utils';
import { Role, RoleRepository, Permission, PermissionRepository } from 'models';

@Injectable()
export class RoleService {
  constructor(
    private readonly roleRepo: RoleRepository,
    private readonly permissionRepo: PermissionRepository,
    private readonly logger: CustomLogger,
  ) {
    this.logger.setContext('RoleService');
  }

  async create(roleReqDto: RoleReqDto): Promise<IRole> {
    let role: Role = RoleReqDto.transformToEntity(roleReqDto);
    role = await this.roleRepo.save(role);
    return role;
  }

  async assignPermissionsToRole(
    id: number,
    permissionIds: AssignPermissionsToRoleDto,
  ): Promise<IRole> {
    const permissions: Permission[] = await this.permissionRepo.findByIds(
      permissionIds.permissions,
    );
    this.logger.log(permissions, '===permissions======');
    let role: Role = await this.roleRepo.findRoleById(id);

    permissions.forEach((permission) => {
      role.permissions.push(permission);
    });
    role = await this.roleRepo.save(role);
    return RoleResDto.transform(role);
  }

  async getRole(roleId: number) {
    return this.roleRepo.findOneOrFail({ where: { id: roleId } });
  }
}
