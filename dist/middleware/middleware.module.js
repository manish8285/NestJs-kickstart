"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewareModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const logger_module_1 = require("../utils/logger/logger.module");
const filter_module_1 = require("../utils/filters/filter.module");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const config_module_1 = require("../configuration/config.module");
const authGuard_middleware_1 = require("./auth/authGuard.middleware");
const authentication_middleware_1 = require("./auth/authentication.middleware");
const user_entity_1 = require("../models/schema/user.entity");
const models_module_1 = require("../models/models.module");
const properties_1 = require("../configuration/properties");
const ioredis_1 = require("ioredis");
let MiddlewareModule = class MiddlewareModule {
    configure() {
    }
};
exports.MiddlewareModule = MiddlewareModule;
exports.MiddlewareModule = MiddlewareModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            logger_module_1.LoggerModule,
            filter_module_1.FilterModule,
            config_module_1.ConfigModule,
            models_module_1.ModelsModule,
            jwt_1.JwtModule.register({}),
        ],
        providers: [auth_service_1.AuthService, authGuard_middleware_1.AuthGuard, authentication_middleware_1.AuthenticationMiddleware, {
                provide: 'REDIS_CLIENT',
                useFactory: () => {
                    const redisConfig = properties_1.default[process.env.NODE_ENV]['redis'];
                    return new ioredis_1.Redis(redisConfig);
                },
            },],
        controllers: [
            auth_controller_1.SecurityController
        ],
        exports: [
            auth_service_1.AuthService,
            authGuard_middleware_1.AuthGuard,
            authentication_middleware_1.AuthenticationMiddleware,
            logger_module_1.LoggerModule,
            jwt_1.JwtModule.register({}),
        ]
    })
], MiddlewareModule);
//# sourceMappingURL=middleware.module.js.map