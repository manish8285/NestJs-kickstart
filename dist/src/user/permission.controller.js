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
exports.PermissionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authority_decorator_1 = require("../../middleware/authority.decorator");
const permission_service_1 = require("./permission.service");
const user_dto_1 = require("../../utils/dto/user-dto");
let PermissionController = class PermissionController {
    constructor(permissionService) {
        this.permissionService = permissionService;
    }
    async create(permissionDto) {
        return this.permissionService.create(permissionDto);
    }
};
exports.PermissionController = PermissionController;
__decorate([
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Permission Created',
        type: user_dto_1.PermissionResDto,
    }),
    (0, common_1.Post)('permissions'),
    (0, authority_decorator_1.Authority)('CREATE_PERMISSION'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.PermissionReqDto]),
    __metadata("design:returntype", Promise)
], PermissionController.prototype, "create", null);
exports.PermissionController = PermissionController = __decorate([
    (0, swagger_1.ApiTags)('permissions'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [permission_service_1.PermissionService])
], PermissionController);
//# sourceMappingURL=permission.controller.js.map