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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const common_2 = require("@nestjs/common");
const user_dto_1 = require("../../utils/dto/user-dto");
const errorResponse_1 = require("../../utils/responses/errorResponse");
const authority_decorator_1 = require("../../middleware/authority.decorator");
const authGuard_middleware_1 = require("../../middleware/auth/authGuard.middleware");
const user_decorator_1 = require("../../middleware/user.decorator");
const user_pipe_1 = require("../../middleware/user.pipe");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async register(userData) {
        return await this.userService.register(userData);
    }
    async assignRolesToUser(userId, roleIds) {
        return await this.userService.assignRolesToUser(userId, roleIds);
    }
    async verifyAccount(token) {
        return await this.userService.verifyAccount(token);
    }
    async resendAccountVerificationCode(email) {
        await this.userService.sendVerificationEmail(email);
        return 'Verification Link has been sent on the email';
    }
    async getUserById(user) {
        return await this.userService.getUserById(user.id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_2.UsePipes)(new common_2.ValidationPipe()),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User created',
        type: user_dto_1.UserResDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Error Response',
        type: errorResponse_1.ErrorResponse,
    }),
    (0, common_1.Post)('users'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserReqDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('users/:userId/roles'),
    (0, authority_decorator_1.Authority)('ASSIGN_ROLE'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.AssignRolesToUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "assignRolesToUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: user_dto_1.UserResDto,
    }),
    (0, common_1.Get)('verifyaccount/:token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyAccount", null);
__decorate([
    (0, common_1.Get)('resend-verification-link/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resendAccountVerificationCode", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, authority_decorator_1.Authority)('VIEW_USER'),
    (0, common_1.UseGuards)(authGuard_middleware_1.AuthGuard),
    (0, common_1.Get)('users/user'),
    __param(0, (0, user_decorator_1.AuthToken)(user_pipe_1.UserFromTokenPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserResDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map