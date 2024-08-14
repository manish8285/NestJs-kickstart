import { Role } from 'models';
export declare class RoleReqDto {
    name: string;
    value: string;
    description: string;
    static transformToEntity(roleReqDto: RoleReqDto): Role;
}
