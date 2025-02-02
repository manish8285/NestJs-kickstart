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
exports.RoleRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const schema_1 = require("../../schema");
let RoleRepository = class RoleRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(schema_1.Role, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async findRoleByValue(value) {
        const role = await this.findOne({ where: { value } });
        if (!role) {
            throw new common_1.NotFoundException(`Role with value ${value} not found`);
        }
        return role;
    }
    async findRoleById(id) {
        const role = await this.findOne({ where: { id } });
        if (!role) {
            throw new common_1.NotFoundException(`Role with id ${id} not found`);
        }
        return role;
    }
    async findAll() {
        return await this.find();
    }
    async findRolesByIds(ids) {
        const roles = await this.findByIds(ids);
        if (roles.length !== ids.length) {
            throw new common_1.NotFoundException("Some roles were not found");
        }
        return roles;
    }
    async createRole(value, description) {
        const role = this.create({ value, description });
        return await this.save(role);
    }
};
exports.RoleRepository = RoleRepository;
exports.RoleRepository = RoleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], RoleRepository);
//# sourceMappingURL=role.repository.js.map