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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const custom_logger_service_1 = require("../../utils/logger/custom-logger.service");
const authority_decorator_1 = require("../../middleware/authority.decorator");
const role_service_1 = require("./role.service");
const utils_1 = require("../../utils");
let RoleController = class RoleController {
    constructor(roleService, logger) {
        this.roleService = roleService;
        this.logger = logger;
    }
    async create(roleReqDto) {
        return this.roleService.create(roleReqDto);
    }
    async assignPermissionToRole(roleId, permissionIds) {
        return this.roleService.assignPermissionsToRole(roleId, permissionIds);
    }
    async getRoles(roleId) {
        return this.roleService.getRole(roleId);
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'user created',
        type: utils_1.RoleResDto,
    }),
    (0, common_1.Post)('roles'),
    (0, authority_decorator_1.Authority)('CREATE_ROLE'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utils_1.RoleReqDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Post)('roles/:roleId/permissions'),
    (0, authority_decorator_1.Authority)('ASSIGN_PERMISSION'),
    __param(0, (0, common_1.Param)('roleId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, utils_1.AssignPermissionsToRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "assignPermissionToRole", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        type: [utils_1.RoleResDto],
    }),
    (0, common_1.Get)('roles/:roleId'),
    __param(0, (0, common_1.Param)('roleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getRoles", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('Role'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [role_service_1.RoleService,
        custom_logger_service_1.CustomLogger])
], RoleController);
//# sourceMappingURL=role.controller.js.map