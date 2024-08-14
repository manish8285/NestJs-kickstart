import { CustomLogger } from 'utils/logger/custom-logger.service';
import { RoleService } from './role.service';
import { RoleReqDto, AssignPermissionsToRoleDto } from 'utils';
export declare class RoleController {
    private readonly roleService;
    private readonly logger;
    constructor(roleService: RoleService, logger: CustomLogger);
    create(roleReqDto: RoleReqDto): Promise<import("./role.interface").IRole>;
    assignPermissionToRole(roleId: number, permissionIds: AssignPermissionsToRoleDto): Promise<import("./role.interface").IRole>;
    getRoles(roleId: number): Promise<import("../../models").Role>;
}
