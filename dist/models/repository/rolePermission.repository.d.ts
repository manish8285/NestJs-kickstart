import { Permission, Role } from 'models';
import { DataSource, Repository } from "typeorm";
export declare class RolePermissionRepository extends Repository<Role> {
    private dataSource;
    constructor(dataSource: DataSource);
    assignPermissionsToRole(role: Role, permissions: Permission[]): Promise<Role>;
    getRoleWithPermissions(roleId: number): Promise<Role | null>;
}
