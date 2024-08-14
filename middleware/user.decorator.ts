import { ExecutionContext, Inject, Injectable, UnauthorizedException, createParamDecorator } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


export const AuthToken = createParamDecorator((data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const authorization = request.get("Authorization");
    if (!authorization) {
        throw new UnauthorizedException("missing authorization")
    }
    const [bearer, token] = authorization.split(' ');
    //console.log(authorization);
    return token;
});
