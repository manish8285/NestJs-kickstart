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
exports.UserRoleRepository = void 0;
const common_1 = require("@nestjs/common");
const schema_1 = require("../schema");
const typeorm_1 = require("typeorm");
let UserRoleRepository = class UserRoleRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(schema_1.User, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async assignRolesToUser(user, roles) {
        user.roles = [...(user.roles || []), ...roles];
        return await this.save(user);
    }
    async removeRolesFromUser(user, rolesToRemove) {
        user.roles = user.roles.filter(role => !rolesToRemove.some(r => r.id === role.id));
        return await this.save(user);
    }
    async getUsersByRoleValue(roleValue) {
        return this.find({
            relations: ['roles'],
            where: {
                roles: {
                    value: roleValue,
                },
            },
        });
    }
    async getUserRoles(id) {
        const user = await this.findOne({ where: { id }, relations: ['roles'] });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        return user.roles;
    }
};
exports.UserRoleRepository = UserRoleRepository;
exports.UserRoleRepository = UserRoleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserRoleRepository);
//# sourceMappingURL=userRole.repository.js.map