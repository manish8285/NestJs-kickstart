"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthToken = void 0;
const common_1 = require("@nestjs/common");
exports.AuthToken = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    const authorization = request.get("Authorization");
    if (!authorization) {
        throw new common_1.UnauthorizedException("missing authorization");
    }
    const [bearer, token] = authorization.split(' ');
    return token;
});
//# sourceMappingURL=user.decorator.js.map