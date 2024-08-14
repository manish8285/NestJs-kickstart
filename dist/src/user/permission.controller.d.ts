import { PermissionService } from './permission.service';
import { PermissionReqDto } from '../../utils/dto/user-dto';
export declare class PermissionController {
    private readonly permissionService;
    constructor(permissionService: PermissionService);
    create(permissionDto: PermissionReqDto): Promise<import("./permission.interface").IPermission>;
}
