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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const custom_logger_service_1 = require("../../utils/logger/custom-logger.service");
const utils_1 = require("../../utils");
const models_1 = require("../../models");
let RoleService = class RoleService {
    constructor(roleRepo, permissionRepo, logger) {
        this.roleRepo = roleRepo;
        this.permissionRepo = permissionRepo;
        this.logger = logger;
        this.logger.setContext('RoleService');
    }
    async create(roleReqDto) {
        let role = utils_1.RoleReqDto.transformToEntity(roleReqDto);
        role = await this.roleRepo.save(role);
        return role;
    }
    async assignPermissionsToRole(id, permissionIds) {
        const permissions = await this.permissionRepo.findByIds(permissionIds.permissions);
        this.logger.log(permissions, '===permissions======');
        let role = await this.roleRepo.findRoleById(id);
        permissions.forEach((permission) => {
            role.permissions.push(permission);
        });
        role = await this.roleRepo.save(role);
        return utils_1.RoleResDto.transform(role);
    }
    async getRole(roleId) {
        return this.roleRepo.findOneOrFail({ where: { id: roleId } });
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [models_1.RoleRepository,
        models_1.PermissionRepository,
        custom_logger_service_1.CustomLogger])
], RoleService);
//# sourceMappingURL=role.service.js.map