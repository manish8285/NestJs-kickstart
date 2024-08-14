import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UsePipes, ValidationPipe, Body } from '@nestjs/common';
import {
  UserReqDto,
  UserResDto,
  AssignRolesToUserDto,
} from '../../utils/dto/user-dto';
import { ErrorResponse } from 'utils/responses/errorResponse';
import { Authority } from '../../middleware/authority.decorator';
import { AuthGuard } from 'middleware/auth/authGuard.middleware';
import { AuthToken } from 'middleware/user.decorator';
import { UserFromTokenPipe } from 'middleware/user.pipe';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 200,
    description: 'User created',
    type: UserResDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Error Response',
    type: ErrorResponse,
  })
  @Post('users')
  async register(@Body() userData: UserReqDto) {
    return await this.userService.register(userData);
  }

  @Post('users/:userId/roles')
  @Authority('ASSIGN_ROLE')
  async assignRolesToUser(
    @Param('userId') userId: number,
    @Body() roleIds: AssignRolesToUserDto,
  ) {
    return await this.userService.assignRolesToUser(userId, roleIds);
  }

  @ApiResponse({
    type: UserResDto,
  })
  @Get('verifyaccount/:token')
  async verifyAccount(@Param('token') token: string): Promise<string> {
    return await this.userService.verifyAccount(token);
  }

  @Get('resend-verification-link/:email')
  async resendAccountVerificationCode(@Param('email') email: string) {
    await this.userService.sendVerificationEmail(email);
    return 'Verification Link has been sent on the email';
  }
  @ApiBearerAuth('access-token')
  @Authority('VIEW_USER')
  @UseGuards(AuthGuard)
  @Get('users/user')
  async getUserById(@AuthToken(UserFromTokenPipe) user: UserResDto) {
    return await this.userService.getUserById(user.id);
  }
}
