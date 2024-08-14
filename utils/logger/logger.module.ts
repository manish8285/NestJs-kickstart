import { Module } from '@nestjs/common';
import { CustomLogger } from 'utils/logger/custom-logger.service';

@Module({
  providers: [CustomLogger],
  exports: [CustomLogger],
})
export class LoggerModule {}