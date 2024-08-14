import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { CustomLogger } from "./utils/logger/custom-logger.service";
import { PermissionsList, RolesList } from "./roles-and-permission";
import { Injectable } from "@nestjs/common";
import { PermissionRepository, Role, RoleRepository, User, UserRepository, UserRoleRepository } from 'models';

@Injectable()
export class BootstrapService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly userRoleRepo: UserRoleRepository,
        private readonly roleRepo: RoleRepository,
        private readonly permissionRepo: PermissionRepository,
        private readonly logger: CustomLogger) { }

    async createAdmin() {
        console.log("creating admin ....")
        await this.createPermissions();
        await this.createRoles();
        let users: User[] = await this.userRoleRepo.getUsersByRoleValue('ROLE_ADMIN');
        if (users == null) {
            let role: Role = await this.roleRepo.findRoleByValue("ROLE_ADMIN")
            let user = new User();
            user.email = "admin@example.com";
            user.firstName = "Admin";
            user.lastName = "Admin";
            user.isAccountLocked = false;
            user.isActive = true;
            user.password = "Test@123"
            user.roles = [role];
            this.userRepo.save(user);
        }

    }

    private async createRoles() {
        this.logger.log("Creating roles...");
        const existingRoles = await this.roleRepo.findAll();
        
        if (existingRoles.length === 0) {
            for (const roleData of RolesList) {
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
        } else {
            this.logger.log("Roles already exist");
        }
    }

    private async createPermissions() {
        this.logger.log("Creating permissions...");
        const existingPermissions = await this.permissionRepo.findAll();
        
        if (existingPermissions.length === 0) {
            await this.permissionRepo.save(PermissionsList);
            this.logger.log("Permissions created successfully");
        } else {
            this.logger.log("Permissions already exist");
        }
    }
}