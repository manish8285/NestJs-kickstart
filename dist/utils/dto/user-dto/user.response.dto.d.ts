import { BaseResponse } from "utils/responses/baseResponse.dto";
export declare class UserCompanyDto {
    company_id: number;
    company_name: string;
}
export declare class UserResDto extends BaseResponse {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    roles: RoleDto[];
    company: UserCompanyDto;
    static transform(object: any): UserResDto;
}
export declare class RoleDto {
    id: number;
    name: string;
    value: string;
    permissions: PermissionDto[];
}
export declare class PermissionDto {
    id: number;
    name: string;
    value: string;
}
