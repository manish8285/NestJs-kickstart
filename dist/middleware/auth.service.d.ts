import { LoginReqDto } from "middleware/auth-dto";
import { IAuthResponse } from "middleware/auth.interface";
import { CustomLogger } from "utils/logger/custom-logger.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "../configuration/config.service";
import { UserRepository } from 'models';
import Redis from 'ioredis';
export declare class AuthService {
    private readonly userRepository;
    private readonly logger;
    private readonly jwtService;
    private readonly configService;
    private readonly redisClient;
    constructor(userRepository: UserRepository, logger: CustomLogger, jwtService: JwtService, configService: ConfigService, redisClient: Redis);
    login(loginDto: LoginReqDto): Promise<IAuthResponse>;
}
