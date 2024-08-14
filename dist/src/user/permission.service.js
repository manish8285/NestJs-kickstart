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
exports.PermissionService = void 0;
const common_1 = require("@nestjs/common");
const custom_logger_service_1 = require("../../utils/logger/custom-logger.service");
const utils_1 = require("../../utils");
const models_1 = require("../../models");
let PermissionService = class PermissionService {
    constructor(permissionRepo, logger) {
        this.permissionRepo = permissionRepo;
        this.logger = logger;
        this.logger.setContext('PermissionService');
    }
    async create(permissionDto) {
        let permission = utils_1.PermissionReqDto.transformToEntity(permissionDto);
        permission = await this.permissionRepo.createOne(permission);
        return utils_1.PermissionResDto.transform(permission);
    }
};
exports.PermissionService = PermissionService;
exports.PermissionService = PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [models_1.PermissionRepository,
        custom_logger_service_1.CustomLogger])
], PermissionService);
//# sourceMappingURL=permission.service.js.map