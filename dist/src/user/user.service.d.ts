import { UserReqDto, UserResDto, AssignRolesToUserDto } from 'utils';
import { IUser } from './user.interface';
import { CustomLogger } from 'utils/logger/custom-logger.service';
import { EmailService } from 'utils/email.service';
import { ConfigService } from './../../configuration/config.service';
import { UserRepository, UserRoleRepository, VerificationTokenRepository } from 'models';
import { RoleRepository } from 'models/repository/base/role.repository';
export declare class UserService {
    private readonly userRepository;
    private readonly roleRepository;
    private readonly userRoleRepository;
    private readonly verificationTokenRepo;
    private readonly logger;
    private readonly emailService;
    private readonly configService;
    constructor(userRepository: UserRepository, roleRepository: RoleRepository, userRoleRepository: UserRoleRepository, verificationTokenRepo: VerificationTokenRepository, logger: CustomLogger, emailService: EmailService, configService: ConfigService);
    register(dto: UserReqDto): Promise<IUser>;
    assignRolesToUser(userId: number, roleIds: AssignRolesToUserDto): Promise<IUser>;
    sendVerificationEmail(email: string): Promise<void>;
    verifyAccount(token: string): Promise<string>;
    getUserById(userId: number): Promise<UserResDto>;
}
