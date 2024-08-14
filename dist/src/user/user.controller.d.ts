import { UserService } from './user.service';
import { UserReqDto, UserResDto, AssignRolesToUserDto } from '../../utils/dto/user-dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(userData: UserReqDto): Promise<import("./user.interface").IUser>;
    assignRolesToUser(userId: number, roleIds: AssignRolesToUserDto): Promise<import("./user.interface").IUser>;
    verifyAccount(token: string): Promise<string>;
    resendAccountVerificationCode(email: string): Promise<string>;
    getUserById(user: UserResDto): Promise<UserResDto>;
}
