import { CustomLogger } from "./utils/logger/custom-logger.service";
import { PermissionRepository, RoleRepository, UserRepository, UserRoleRepository } from 'models';
export declare class BootstrapService {
    private readonly userRepo;
    private readonly userRoleRepo;
    private readonly roleRepo;
    private readonly permissionRepo;
    private readonly logger;
    constructor(userRepo: UserRepository, userRoleRepo: UserRoleRepository, roleRepo: RoleRepository, permissionRepo: PermissionRepository, logger: CustomLogger);
    createAdmin(): Promise<void>;
    private createRoles;
    private createPermissions;
}
