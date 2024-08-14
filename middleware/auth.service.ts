import { HttpException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { LoginReqDto, LoginResDto } from "middleware/auth-dto";
import { IAuthResponse } from "middleware/auth.interface";
import { CustomLogger } from "utils/logger/custom-logger.service";
import { JwtService } from "@nestjs/jwt";
import * as argon2 from "argon2";
import { ConfigService } from "../configuration/config.service";
import { User, UserRepository } from 'models';
import Redis from 'ioredis';

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly logger: CustomLogger,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        @Inject('REDIS_CLIENT') private readonly redisClient: Redis,  // Injecting the Redis client
    ) {
        this.logger.setContext(AuthService.name);
    }

    async login(loginDto: LoginReqDto): Promise<IAuthResponse> {
        let user: User = await this.userRepository.findOne({ where: { email: loginDto.email }});

        if (user == null) {
            throw new NotFoundException("User doesn't exist");
        }

        if (!user.isActive || user.isAccountLocked) {
            throw new UnauthorizedException("User account is locked or deactivated. Please contact support");
        }

        let isPasswordMatched: boolean = await argon2.verify(user.password, loginDto.password);
        if (isPasswordMatched) {
            let permissionList = [];
            user.roles.forEach(role => {
                role.permissions.forEach(permission => {
                    permissionList.push(permission.value);
                });
            });

            let payload = { 
                email: user.email, 
                user: { 
                    id: user.id, 
                    firstName: user.firstName, 
                    isActive: user.isActive, 
                    isAccountLocked: user.isAccountLocked, 
                    permissions: permissionList 
                } 
            };

            const accessToken = this.jwtService.sign(payload, { 
                expiresIn: '2d', 
                subject: user.email, 
                algorithm: "HS512", 
                secret: 'secret12356789' 
            });

            let authResponse: LoginResDto = new LoginResDto();
            authResponse.email = user.email;
            authResponse.token = accessToken;

            await this.redisClient.set(user.email, authResponse.token, 'EX', 3600);  // Using the ioredis client to set the token
            return authResponse;
        } else {
            throw new UnauthorizedException("Credentials are wrong. Kindly try again with the right email and password.");
        }
    }
}
