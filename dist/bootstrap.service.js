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
exports.BootstrapService = void 0;
const custom_logger_service_1 = require("./utils/logger/custom-logger.service");
const roles_and_permission_1 = require("./roles-and-permission");
const common_1 = require("@nestjs/common");
const models_1 = require("./models");
let BootstrapService = class BootstrapService {
    constructor(userRepo, userRoleRepo, roleRepo, permissionRepo, logger) {
        this.userRepo = userRepo;
        this.userRoleRepo = userRoleRepo;
        this.roleRepo = roleRepo;
        this.permissionRepo = permissionRepo;
        this.logger = logger;
    }
    async createAdmin() {
        console.log("creating admin ....");
        await this.createPermissions();
        await this.createRoles();
        let users = await this.userRoleRepo.getUsersByRoleValue('ROLE_ADMIN');
        if (users == null) {
            let role = await this.roleRepo.findRoleByValue("ROLE_ADMIN");
            let user = new models_1.User();
            user.email = "admin@example.com";
            user.firstName = "Admin";
            user.lastName = "Admin";
            user.isAccountLocked = false;
            user.isActive = true;
            user.password = "Test@123";
            user.roles = [role];
            this.userRepo.save(user);
        }
    }
    async createRoles() {
        this.logger.log("Creating roles...");
        const existingRoles = await this.roleRepo.findAll();
        if (existingRoles.length === 0) {
            for (const roleData of roles_and_permission_1.RolesList) {
                const permissions = await this.permissionRepo.findByValues(roleData.permissionValueList);
                const newRole = this.roleRepo.create({
                    name: roleData.name,
                    value: roleData.value,
                    description: roleData.description,
                    permissions: permissions
                });
                await this.roleRepo.save(newRole);
            }
            this.logger.log("Roles created successfully");
        }
        else {
            this.logger.log("Roles already exist");
        }
    }
    async createPermissions() {
        this.logger.log("Creating permissions...");
        const existingPermissions = await this.permissionRepo.findAll();
        if (existingPermissions.length === 0) {
            await this.permissionRepo.save(roles_and_permission_1.PermissionsList);
            this.logger.log("Permissions created successfully");
        }
        else {
            this.logger.log("Permissions already exist");
        }
    }
};
exports.BootstrapService = BootstrapService;
exports.BootstrapService = BootstrapService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [models_1.UserRepository,
        models_1.UserRoleRepository,
        models_1.RoleRepository,
        models_1.PermissionRepository,
        custom_logger_service_1.CustomLogger])
], BootstrapService);
//# sourceMappingURL=bootstrap.service.js.map