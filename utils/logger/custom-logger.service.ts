import { ConsoleLogger } from '@nestjs/common';

export class CustomLogger extends ConsoleLogger
{
  constructor(context?: string) {
    super(context);
  }

  setContext(context: string): void {
    this.context = context;
  }
  
  error(message: string, trace: string) {
    super.error(message, trace,this.context);
  }
}