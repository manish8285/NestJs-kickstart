import { Injectable } from '@nestjs/common';
import { Permission, Role } from 'models';
import { DataSource, Repository } from "typeorm";

@Injectable()
export class RolePermissionRepository extends Repository<Role>
{
  
  constructor(private dataSource: DataSource) {
    super(Role, dataSource.createEntityManager());
  }

  async assignPermissionsToRole(role: Role, permissions: Permission[]): Promise<Role> {
    role.permissions = [...(role.permissions || []), ...permissions];
    return await this.save(role);
  }

  async getRoleWithPermissions(roleId: number): Promise<Role | null> {
    return await this.findOne({
      where: { id: roleId },
      relations: ['permissions']
    });
  }
}