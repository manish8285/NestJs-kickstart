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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./src/user/user.module");
const middleware_module_1 = require("./middleware/middleware.module");
const logger_module_1 = require("./utils/logger/logger.module");
const filter_module_1 = require("./utils/filters/filter.module");
const config_module_1 = require("./configuration/config.module");
const jwt_1 = require("@nestjs/jwt");
const bootstrap_service_1 = require("./bootstrap.service");
const mailer_1 = require("@nestjs-modules/mailer");
const utils_module_1 = require("./utils/utils.module");
const models_module_1 = require("./models/models.module");
const properties_1 = require("./configuration/properties");
let AppModule = class AppModule {
    constructor() { }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            models_module_1.ModelsModule,
            middleware_module_1.MiddlewareModule,
            logger_module_1.LoggerModule,
            filter_module_1.FilterModule,
            config_module_1.ConfigModule,
            jwt_1.JwtModule.register({}),
            utils_module_1.UtilsModule,
            mailer_1.MailerModule.forRoot(properties_1.default[process.env.NODE_ENV]['emailConfig']),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, bootstrap_service_1.BootstrapService],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
//# sourceMappingURL=app.module.js.map