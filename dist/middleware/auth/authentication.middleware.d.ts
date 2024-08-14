import { NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
export declare class AuthenticationMiddleware implements NestMiddleware {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    use(req: any, res: any, next: () => void): void;
}
