import { Exclude, plainToClass } from "class-transformer";
import { BaseResponse } from "utils/responses/baseResponse.dto";
import { ApiProperty } from "@nestjs/swagger";
import { RoleResDto } from "./role.response.dto";

export class UserCompanyDto {
    company_id: number;
    company_name: string;
}

export class UserResDto extends BaseResponse {

    id: number;

    @ApiProperty({ example: "test@mail.com" })
    email: string;
    @ApiProperty({ example: "John" })
    firstName: string;
    @ApiProperty({ example: "Smith" })
    lastName: string;

    @ApiProperty()
    roles: RoleDto[]

    @ApiProperty({
        example: UserCompanyDto
    })
    company: UserCompanyDto;


    static transform(object: any) {
        let transformedObj: UserResDto = plainToClass(UserResDto, object, { excludePrefixes: ["password", "confirmPassword", "description", "id"] });
        return transformedObj;
    }

}

export class RoleDto {

    @Exclude()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    value: string;

    @ApiProperty()
    permissions: PermissionDto[];
}

export class PermissionDto {

    @Exclude()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    value: string;

}