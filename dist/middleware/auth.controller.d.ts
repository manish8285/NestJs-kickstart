import { LoginReqDto } from "middleware/auth-dto";
import { AuthService } from "middleware/auth.service";
export declare class SecurityController {
    private readonly securityService;
    constructor(securityService: AuthService);
    login(loginDto: LoginReqDto): Promise<import("./auth.interface").IAuthResponse>;
}
