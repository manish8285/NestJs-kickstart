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
exports.PermissionRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const schema_1 = require("../../schema");
let PermissionRepository = class PermissionRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(schema_1.Permission, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async findByIds(ids) {
        const permissions = await this.find({
            where: { id: (0, typeorm_1.In)(ids) }
        });
        if (permissions.length !== ids.length) {
            const foundIds = permissions.map(p => p.id);
            const missingIds = ids.filter(id => !foundIds.includes(id));
            throw new common_1.NotFoundException(`Permissions with ids ${missingIds.join(', ')} not found`);
        }
        return permissions;
    }
    async createOne(permissionData) {
        const permission = this.create(permissionData);
        return await this.save(permission);
    }
    async findByName(name) {
        return await this.findOne({ where: { name } });
    }
    async findAll() {
        return await this.find();
    }
    async updatePermission(id, permissionData) {
        await this.update(id, permissionData);
        const options = {
            where: { id }
        };
        const updatedPermission = await this.findOne(options);
        if (!updatedPermission) {
            throw new common_1.NotFoundException(`Permission with id ${id} not found`);
        }
        return updatedPermission;
    }
    async deletePermission(id) {
        const result = await this.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Permission with id ${id} not found`);
        }
    }
    async findByValues(values) {
        const permissions = await this.find({
            where: { value: (0, typeorm_1.In)(values) }
        });
        if (permissions.length !== values.length) {
            const foundValues = permissions.map(p => p.value);
            const missingValues = values.filter(value => !foundValues.includes(value));
            throw new common_1.NotFoundException(`Permissions with values ${missingValues.join(', ')} not found`);
        }
        return permissions;
    }
};
exports.PermissionRepository = PermissionRepository;
exports.PermissionRepository = PermissionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], PermissionRepository);
//# sourceMappingURL=permission.repository.js.map