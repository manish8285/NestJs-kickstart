import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from '@nestjs/core';
import { CustomLogger } from "utils/logger/custom-logger.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private reflector: Reflector,
        private readonly logger: CustomLogger,
        private readonly jwtService: JwtService,
    ) {
        this.logger.setContext('AuthGuard');
    }

    canActivate(context: ExecutionContext): boolean {
        const authority = this.reflector.get<string>('authority', context.getHandler());
        if (!authority) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        //request.companyid = '101'
        const user = request.user;
        //request.companyid = '101';
        console.log("authority = " + authority);
        const authorization = request.get("Authorization");
        //console.log("authorization" + JSON.stringify(authorization))
        if (authorization != "" && authorization != null) {
            const [bearer, token] = authorization.split(" ")
            //console.log("token = " + token)
            let decode = this.jwtService.decode(token);
            let verify = this.jwtService.verify(token, { secret: "secret12356789" })
            console.log("decode = " + JSON.stringify(decode))
            console.log("verify =" + JSON.stringify(verify))
            if (verify != null && verify.user.permissions.find(element => element == authority) != null) {
                return true;
            }
        }

        return false;
        //return true;
    }
}