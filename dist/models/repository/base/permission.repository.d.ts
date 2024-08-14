import { Repository, DataSource } from "typeorm";
import { Permission } from 'models/schema';
export declare class PermissionRepository extends Repository<Permission> {
    private dataSource;
    constructor(dataSource: DataSource);
    findByIds(ids: number[]): Promise<Permission[]>;
    createOne(permissionData: Partial<Permission>): Promise<Permission>;
    findByName(name: string): Promise<Permission | undefined>;
    findAll(): Promise<Permission[]>;
    updatePermission(id: number, permissionData: Partial<Permission>): Promise<Permission>;
    deletePermission(id: number): Promise<void>;
    findByValues(values: string[]): Promise<Permission[]>;
}
