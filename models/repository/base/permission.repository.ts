import {Repository, In, DataSource, FindOneOptions } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Permission } from 'models/schema';


@Injectable()
export class PermissionRepository extends Repository<Permission>
{

  constructor(private dataSource: DataSource) {
    super(Permission, dataSource.createEntityManager());
  }
  

  async findByIds(ids: number[]): Promise<Permission[]> {
    const permissions = await this.find({
      where: { id: In(ids) }
    })

    if (permissions.length !== ids.length) {
      const foundIds = permissions.map(p => p.id);
      const missingIds = ids.filter(id => !foundIds.includes(id));
      throw new NotFoundException(`Permissions with ids ${missingIds.join(', ')} not found`);
    }

    return permissions;
  }

  async createOne(permissionData: Partial<Permission>): Promise<Permission> {
    const permission = this.create(permissionData);
    return await this.save(permission);
  }

  async findByName(name: string): Promise<Permission | undefined> {
    return await this.findOne({ where: { name } });
  }

  async findAll(): Promise<Permission[]> {
    return await this.find();
  }

  async updatePermission(id: number, permissionData: Partial<Permission>): Promise<Permission> {
    await this.update(id, permissionData);
    const options: FindOneOptions<Permission> = {
      where: { id }
    };
    const updatedPermission = await this.findOne(options);
    if (!updatedPermission) {
      throw new NotFoundException(`Permission with id ${id} not found`);
    }
    return updatedPermission;
  }

  async deletePermission(id: number): Promise<void> {
    const result = await this.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Permission with id ${id} not found`);
    }
  }

  async findByValues(values: string[]): Promise<Permission[]> {
    const permissions = await this.find({
      where: { value: In(values) }
    });

    if (permissions.length !== values.length) {
      const foundValues = permissions.map(p => p.value);
      const missingValues = values.filter(value => !foundValues.includes(value));
      throw new NotFoundException(`Permissions with values ${missingValues.join(', ')} not found`);
    }

    return permissions;
  }
}