"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsModule = void 0;
const common_1 = require("@nestjs/common");
const schema_1 = require("./schema");
const typeorm_1 = require("@nestjs/typeorm");
const properties_1 = require("../configuration/properties");
const repository_1 = require("./repository");
let ModelsModule = class ModelsModule {
    configure() { }
};
exports.ModelsModule = ModelsModule;
exports.ModelsModule = ModelsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(properties_1.default[process.env.NODE_ENV]["ormConfig"]),
            typeorm_1.TypeOrmModule.forFeature([schema_1.User, schema_1.Permission, schema_1.Role, schema_1.VerificationToken])
        ],
        providers: [
            repository_1.UserRepository,
            repository_1.PermissionRepository,
            repository_1.RoleRepository,
            repository_1.UserRoleRepository,
            repository_1.RolePermissionRepository,
            repository_1.VerificationTokenRepository
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            repository_1.UserRepository,
            repository_1.PermissionRepository,
            repository_1.RoleRepository,
            repository_1.UserRoleRepository,
            repository_1.RolePermissionRepository,
            repository_1.VerificationTokenRepository
        ]
    })
], ModelsModule);
//# sourceMappingURL=models.module.js.map