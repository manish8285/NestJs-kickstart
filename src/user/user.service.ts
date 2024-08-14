import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UserReqDto, UserResDto, AssignRolesToUserDto } from 'utils';
import { IUser } from './user.interface';
import { CustomLogger } from 'utils/logger/custom-logger.service';
import { EmailService } from 'utils/email.service';
import { ConfigService } from './../../configuration/config.service';
import { v4 as uuid } from 'uuid';
import {
  UserRepository,
  UserRoleRepository,
  VerificationTokenRepository,
} from 'models';
import { RoleRepository } from 'models/repository/base/role.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository,
    private readonly userRoleRepository: UserRoleRepository,
    private readonly verificationTokenRepo: VerificationTokenRepository,
    private readonly logger: CustomLogger,
    private readonly emailService: EmailService,
    private readonly configService: ConfigService,
  ) {
    this.logger.setContext('UserService');
  }

  async register(dto: UserReqDto): Promise<IUser> {
    let entity = UserReqDto.transformToEntity(dto);
    const role = await this.roleRepository.findRoleByValue('ROLE_USER');
    entity.roles = [role];
    entity = await this.userRepository.saveUser(entity);
    await this.sendVerificationEmail(entity.email);
    return UserResDto.transform(entity);
  }

  async assignRolesToUser(
    userId: number,
    roleIds: AssignRolesToUserDto,
  ): Promise<IUser> {
    const roles = await this.roleRepository.findRolesByIds(roleIds.roles);
    const user = await this.userRepository.findUserById(userId);
    const updatedUser = await this.userRoleRepository.assignRolesToUser(
      user,
      roles,
    );
    return UserResDto.transform(updatedUser);
  }

  async sendVerificationEmail(email: string) {
    await this.userRepository.findUserByEmail(email);

    const subject: string =
      ConfigService.PROPERTIES.accountVerificationEmail.subject;
    let textBody: string =
      ConfigService.PROPERTIES.accountVerificationEmail.emailBody;
    const fromEmail: string =
      ConfigService.PROPERTIES.accountVerificationEmail.fromEmail;
    const host: string = ConfigService.PROPERTIES.client.host;
    const port: number = ConfigService.PROPERTIES.client.port;
    const token: string = uuid();

    const verificationToken =
      await this.verificationTokenRepo.createVerificationToken(email, token);

    if (verificationToken) {
      const verificationLink: string = `http://${host}:${port}/auth/account-verification/${token}`;
      textBody = textBody.replace('$url', verificationLink);
      this.logger.log(textBody, '=== verification link ===');
      await this.emailService.sendTextMail(email, subject, textBody, fromEmail);
    }
  }

  async verifyAccount(token: string) {
    try {
      const verificationToken =
        await this.verificationTokenRepo.findByToken(token);
      const user = await this.userRepository.findUserByEmail(
        verificationToken.email,
      );
      await this.userRepository.unlockUserAccount(user);
      await this.verificationTokenRepo.deleteToken(verificationToken);
      return 'Account verification is successful';
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new InternalServerErrorException(
          'Your verification link is not valid',
        );
      }
      throw error;
    }
  }

  async getUserById(userId: number) {
    const entity = await this.userRepository.findUserById(userId);
    return UserResDto.transform(entity);
  }
}
