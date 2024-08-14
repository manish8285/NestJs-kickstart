import { ApiProperty } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { Role } from 'models';

export class RoleReqDto {

    @ApiProperty({example:"Role Admin"})
    name:string;

    @ApiProperty({example:"ROLE_ADMIN"})
    value:string;

    @ApiProperty({example:"This role is specifically meant for Admin"})
    description:string;

    static transformToEntity(roleReqDto: RoleReqDto){
        return plainToClass(Role, roleReqDto);
    }
    
}