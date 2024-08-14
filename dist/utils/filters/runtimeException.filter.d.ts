import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { CustomLogger } from "utils/logger/custom-logger.service";
export declare class RuntimeExceptionFilter<T> implements ExceptionFilter {
    private readonly logger;
    constructor(logger: CustomLogger);
    catch(exception: T, host: ArgumentsHost): void;
}
