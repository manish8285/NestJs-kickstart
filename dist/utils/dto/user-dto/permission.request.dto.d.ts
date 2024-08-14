import { Permission } from 'models';
export declare class PermissionReqDto {
    name: string;
    value: string;
    description: string;
    static transformToEntity(permissionReqDto: PermissionReqDto): Permission;
}
