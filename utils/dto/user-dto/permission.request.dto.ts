import { ApiProperty } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { Permission } from 'models';

export class PermissionReqDto {

    @ApiProperty({example:"Create User"})
    name:string;

    @ApiProperty({example:"CREATE_USER"})
    value:string;

    @ApiProperty({example:"This permission is specifically meant for creating a user"})
    description:string;


    static transformToEntity(permissionReqDto: PermissionReqDto){
        return plainToClass(Permission, permissionReqDto);
    }
    
}