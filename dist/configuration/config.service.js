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
var ConfigService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const custom_logger_service_1 = require("../utils/logger/custom-logger.service");
const properties_1 = require("./properties");
let ConfigService = ConfigService_1 = class ConfigService {
    constructor(logger) {
        this.logger = logger;
        if (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "") {
            ConfigService_1.PROPERTIES = properties_1.default.development;
        }
        if (process.env.NODE_ENV == "production") {
            ConfigService_1.PROPERTIES = properties_1.default.production;
        }
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = ConfigService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [custom_logger_service_1.CustomLogger])
], ConfigService);
//# sourceMappingURL=config.service.js.map