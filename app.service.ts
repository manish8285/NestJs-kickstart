import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from './middleware/auth/authGuard.middleware';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}
