import { DataSource, Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Role } from 'models/schema';

@Injectable()
export class RoleRepository extends Repository<Role>
{
  
  constructor(private dataSource: DataSource) {
    super(Role, dataSource.createEntityManager());
  }

  async findRoleByValue(value: string): Promise<Role> {
    const role = await this.findOne({ where: { value } });
    if (!role) {
      throw new NotFoundException(`Role with value ${value} not found`);
    }
    return role;
  }

  async findRoleById(id: number): Promise<Role> {
    const role = await this.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException(`Role with id ${id} not found`);
    }
    return role;
  }

  async findAll(): Promise<Role[]>
  {
    return await this.findAll();
  }

  async findRolesByIds(ids: number[]): Promise<Role[]> {
    const roles = await this.findByIds(ids);
    if (roles.length !== ids.length) {
      throw new NotFoundException("Some roles were not found");
    }
    return roles;
  }

  async createRole(value: string, description: string): Promise<Role> {
    const role = this.create({ value, description });
    return await this.save(role);
  }
}