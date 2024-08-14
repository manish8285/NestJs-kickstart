import { ArgumentMetadata, Injectable, PipeTransform, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";

@Injectable()
export class UserFromTokenPipe implements PipeTransform {
    public constructor(private readonly jwtService: JwtService,
        private readonly userService: UserService) { }

    public async transform(token: string, metadata: ArgumentMetadata) {
        try {
            const payload = this.jwtService.verify(token, { secret: "secret12356789" });
            return payload.user
            //JSON.stringify(payload);

        } catch (error) {
            throw new UnauthorizedException("Token");
        }
    }
}