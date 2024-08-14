"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_dto_1 = require("./auth-dto");
const custom_logger_service_1 = require("../utils/logger/custom-logger.service");
const jwt_1 = require("@nestjs/jwt");
const argon2 = require("argon2");
const config_service_1 = require("../configuration/config.service");
const models_1 = require("../models");
const ioredis_1 = require("ioredis");
let AuthService = AuthService_1 = class AuthService {
    constructor(userRepository, logger, jwtService, configService, redisClient) {
        this.userRepository = userRepository;
        this.logger = logger;
        this.jwtService = jwtService;
        this.configService = configService;
        this.redisClient = redisClient;
        this.logger.setContext(AuthService_1.name);
    }
    async login(loginDto) {
        let user = await this.userRepository.findOne({ where: { email: loginDto.email } });
        if (user == null) {
            throw new common_1.NotFoundException("User doesn't exist");
        }
        if (!user.isActive || user.isAccountLocked) {
            throw new common_1.UnauthorizedException("User account is locked or deactivated. Please contact support");
        }
        let isPasswordMatched = await argon2.verify(user.password, loginDto.password);
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
            let authResponse = new auth_dto_1.LoginResDto();
            authResponse.email = user.email;
            authResponse.token = accessToken;
            await this.redisClient.set(user.email, authResponse.token, 'EX', 3600);
            return authResponse;
        }
        else {
            throw new common_1.UnauthorizedException("Credentials are wrong. Kindly try again with the right email and password.");
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [models_1.UserRepository,
        custom_logger_service_1.CustomLogger,
        jwt_1.JwtService,
        config_service_1.ConfigService,
        ioredis_1.default])
], AuthService);
//# sourceMappingURL=auth.service.js.map