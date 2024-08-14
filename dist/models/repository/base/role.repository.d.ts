import { DataSource, Repository } from "typeorm";
import { Role } from 'models/schema';
export declare class RoleRepository extends Repository<Role> {
    private dataSource;
    constructor(dataSource: DataSource);
    findRoleByValue(value: string): Promise<Role>;
    findRoleById(id: number): Promise<Role>;
    findAll(): Promise<Role[]>;
    findRolesByIds(ids: number[]): Promise<Role[]>;
    createRole(value: string, description: string): Promise<Role>;
}
