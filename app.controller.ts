import { Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './middleware/auth/authGuard.middleware';
import { Authority } from './middleware/authority.decorator';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { AuthToken } from './middleware/user.decorator';
import { UserFromTokenPipe } from './middleware/user.pipe';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }



  @Get("test")
  // @ApiHeader({
  //   name: 'companyId',
  //   required: false,
  //   schema: { type: 'number' },
  // })
  @ApiBearerAuth('access-token')
  @Authority("VIEW_USER")
  @UseGuards(AuthGuard)
  testAuth(
    @AuthToken(UserFromTokenPipe) user: any,
    //@Headers() headers: any
  ): string {
    console.log(user);
    return "Test Id : 1 , company id =" + JSON.stringify(user)
  }

}
