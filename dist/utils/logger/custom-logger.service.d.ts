import { ConsoleLogger } from '@nestjs/common';
export declare class CustomLogger extends ConsoleLogger {
    constructor(context?: string);
    setContext(context: string): void;
    error(message: string, trace: string): void;
}
