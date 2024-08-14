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
exports.RolePermissionRepository = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("..");
const typeorm_1 = require("typeorm");
let RolePermissionRepository = class RolePermissionRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(models_1.Role, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async assignPermissionsToRole(role, permissions) {
        role.permissions = [...(role.permissions || []), ...permissions];
        return await this.save(role);
    }
    async getRoleWithPermissions(roleId) {
        return await this.findOne({
            where: { id: roleId },
            relations: ['permissions']
        });
    }
};
exports.RolePermissionRepository = RolePermissionRepository;
exports.RolePermissionRepository = RolePermissionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], RolePermissionRepository);
//# sourceMappingURL=rolePermission.repository.js.map