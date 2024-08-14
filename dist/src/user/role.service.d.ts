import { CustomLogger } from 'utils/logger/custom-logger.service';
import { IRole } from './role.interface';
import { AssignPermissionsToRoleDto, RoleReqDto } from 'utils';
import { Role, RoleRepository, PermissionRepository } from 'models';
export declare class RoleService {
    private readonly roleRepo;
    private readonly permissionRepo;
    private readonly logger;
    constructor(roleRepo: RoleRepository, permissionRepo: PermissionRepository, logger: CustomLogger);
    create(roleReqDto: RoleReqDto): Promise<IRole>;
    assignPermissionsToRole(id: number, permissionIds: AssignPermissionsToRoleDto): Promise<IRole>;
    getRole(roleId: number): Promise<Role>;
}
