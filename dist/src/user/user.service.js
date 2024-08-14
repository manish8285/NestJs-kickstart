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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../../utils");
const custom_logger_service_1 = require("../../utils/logger/custom-logger.service");
const email_service_1 = require("../../utils/email.service");
const config_service_1 = require("./../../configuration/config.service");
const uuid_1 = require("uuid");
const models_1 = require("../../models");
const role_repository_1 = require("../../models/repository/base/role.repository");
let UserService = class UserService {
    constructor(userRepository, roleRepository, userRoleRepository, verificationTokenRepo, logger, emailService, configService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userRoleRepository = userRoleRepository;
        this.verificationTokenRepo = verificationTokenRepo;
        this.logger = logger;
        this.emailService = emailService;
        this.configService = configService;
        this.logger.setContext('UserService');
    }
    async register(dto) {
        let entity = utils_1.UserReqDto.transformToEntity(dto);
        const role = await this.roleRepository.findRoleByValue('ROLE_USER');
        entity.roles = [role];
        entity = await this.userRepository.saveUser(entity);
        await this.sendVerificationEmail(entity.email);
        return utils_1.UserResDto.transform(entity);
    }
    async assignRolesToUser(userId, roleIds) {
        const roles = await this.roleRepository.findRolesByIds(roleIds.roles);
        const user = await this.userRepository.findUserById(userId);
        const updatedUser = await this.userRoleRepository.assignRolesToUser(user, roles);
        return utils_1.UserResDto.transform(updatedUser);
    }
    async sendVerificationEmail(email) {
        await this.userRepository.findUserByEmail(email);
        const subject = config_service_1.ConfigService.PROPERTIES.accountVerificationEmail.subject;
        let textBody = config_service_1.ConfigService.PROPERTIES.accountVerificationEmail.emailBody;
        const fromEmail = config_service_1.ConfigService.PROPERTIES.accountVerificationEmail.fromEmail;
        const host = config_service_1.ConfigService.PROPERTIES.client.host;
        const port = config_service_1.ConfigService.PROPERTIES.client.port;
        const token = (0, uuid_1.v4)();
        const verificationToken = await this.verificationTokenRepo.createVerificationToken(email, token);
        if (verificationToken) {
            const verificationLink = `http://${host}:${port}/auth/account-verification/${token}`;
            textBody = textBody.replace('$url', verificationLink);
            this.logger.log(textBody, '=== verification link ===');
            await this.emailService.sendTextMail(email, subject, textBody, fromEmail);
        }
    }
    async verifyAccount(token) {
        try {
            const verificationToken = await this.verificationTokenRepo.findByToken(token);
            const user = await this.userRepository.findUserByEmail(verificationToken.email);
            await this.userRepository.unlockUserAccount(user);
            await this.verificationTokenRepo.deleteToken(verificationToken);
            return 'Account verification is successful';
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.InternalServerErrorException('Your verification link is not valid');
            }
            throw error;
        }
    }
    async getUserById(userId) {
        const entity = await this.userRepository.findUserById(userId);
        return utils_1.UserResDto.transform(entity);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [models_1.UserRepository,
        role_repository_1.RoleRepository,
        models_1.UserRoleRepository,
        models_1.VerificationTokenRepository,
        custom_logger_service_1.CustomLogger,
        email_service_1.EmailService,
        config_service_1.ConfigService])
], UserService);
//# sourceMappingURL=user.service.js.map