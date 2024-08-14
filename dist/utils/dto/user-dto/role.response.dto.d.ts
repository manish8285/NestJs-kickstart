import { PermissionResDto } from "./permission.response.dto";
export declare class CompanyDto {
    company_id: number;
    company_name: string;
}
export declare class RoleResDto {
    name: string;
    value: string;
    description: string;
    permissions: PermissionResDto[];
    static transform(object: any): RoleResDto;
}
