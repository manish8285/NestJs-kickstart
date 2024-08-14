"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const logger_module_1 = require("../../utils/logger/logger.module");
const filter_module_1 = require("../../utils/filters/filter.module");
const permission_controller_1 = require("./permission.controller");
const permission_service_1 = require("./permission.service");
const role_controller_1 = require("./role.controller");
const role_service_1 = require("./role.service");
const utils_module_1 = require("../../utils/utils.module");
const config_module_1 = require("./../../configuration/config.module");
const middleware_module_1 = require("../../middleware/middleware.module");
const models_module_1 = require("../../models/models.module");
let UserModule = class UserModule {
    configure() { }
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            models_module_1.ModelsModule,
            logger_module_1.LoggerModule,
            filter_module_1.FilterModule,
            utils_module_1.UtilsModule,
            config_module_1.ConfigModule,
            middleware_module_1.MiddlewareModule,
        ],
        providers: [user_service_1.UserService, permission_service_1.PermissionService, role_service_1.RoleService],
        controllers: [user_controller_1.UserController, permission_controller_1.PermissionController, role_controller_1.RoleController],
        exports: [user_service_1.UserService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map