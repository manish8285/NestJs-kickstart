"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsModule = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const properties_1 = require("../configuration/properties");
const email_service_1 = require("./email.service");
const logger_module_1 = require("./logger/logger.module");
let UtilsModule = class UtilsModule {
};
exports.UtilsModule = UtilsModule;
exports.UtilsModule = UtilsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot(properties_1.default[process.env.NODE_ENV]["emailConfig"]),
            logger_module_1.LoggerModule
        ],
        providers: [email_service_1.EmailService],
        exports: [email_service_1.EmailService]
    })
], UtilsModule);
//# sourceMappingURL=utils.module.js.map