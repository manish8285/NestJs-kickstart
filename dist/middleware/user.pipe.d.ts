import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
export declare class UserFromTokenPipe implements PipeTransform {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    transform(token: string, metadata: ArgumentMetadata): Promise<any>;
}
