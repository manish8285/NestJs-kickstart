import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import { CustomLogger } from "utils/logger/custom-logger.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthGuard implements CanActivate {
    private reflector;
    private readonly logger;
    private readonly jwtService;
    constructor(reflector: Reflector, logger: CustomLogger, jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean;
}
