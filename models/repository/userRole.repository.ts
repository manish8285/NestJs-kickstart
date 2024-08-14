import { Injectable, NotFoundException } from '@nestjs/common';
import { Role, User } from 'models/schema';
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UserRoleRepository extends Repository<User>
{
  
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async assignRolesToUser(user: User, roles: Role[]): Promise<User> {
    user.roles = [...(user.roles || []), ...roles];
    return await this.save(user);
  }

  async removeRolesFromUser(user: User, rolesToRemove: Role[]): Promise<User> {
    user.roles = user.roles.filter(role => !rolesToRemove.some(r => r.id === role.id));
    return await this.save(user);
  }

  async getUsersByRoleValue(roleValue: string): Promise<User[]> {
    return this.find({
      relations: ['roles'],
      where: {
        roles: {
          value: roleValue,
        },
      },
    });
  }

  async getUserRoles(id: number): Promise<Role[]> {
    const user = await this.findOne({ where: { id },  relations: ['roles'] });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user.roles;
  }

  
}