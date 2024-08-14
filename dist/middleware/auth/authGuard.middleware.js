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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const custom_logger_service_1 = require("../../utils/logger/custom-logger.service");
const jwt_1 = require("@nestjs/jwt");
let AuthGuard = class AuthGuard {
    constructor(reflector, logger, jwtService) {
        this.reflector = reflector;
        this.logger = logger;
        this.jwtService = jwtService;
        this.logger.setContext('AuthGuard');
    }
    canActivate(context) {
        const authority = this.reflector.get('authority', context.getHandler());
        if (!authority) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log("authority = " + authority);
        const authorization = request.get("Authorization");
        if (authorization != "" && authorization != null) {
            const [bearer, token] = authorization.split(" ");
            let decode = this.jwtService.decode(token);
            let verify = this.jwtService.verify(token, { secret: "secret12356789" });
            console.log("decode = " + JSON.stringify(decode));
            console.log("verify =" + JSON.stringify(verify));
            if (verify != null && verify.user.permissions.find(element => element == authority) != null) {
                return true;
            }
        }
        return false;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        custom_logger_service_1.CustomLogger,
        jwt_1.JwtService])
], AuthGuard);
//# sourceMappingURL=authGuard.middleware.js.map