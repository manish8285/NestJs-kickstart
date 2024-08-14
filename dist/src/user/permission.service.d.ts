import { CustomLogger } from 'utils/logger/custom-logger.service';
import { IPermission } from './permission.interface';
import { PermissionReqDto } from 'utils';
import { PermissionRepository } from 'models';
export declare class PermissionService {
    private readonly permissionRepo;
    private readonly logger;
    constructor(permissionRepo: PermissionRepository, logger: CustomLogger);
    create(permissionDto: PermissionReqDto): Promise<IPermission>;
}
