"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuntimeExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const errorResponse_1 = require("../responses/errorResponse");
const custom_logger_service_1 = require("../logger/custom-logger.service");
let RuntimeExceptionFilter = class RuntimeExceptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(exception, host) {
        let errorResponse = new errorResponse_1.ErrorResponse();
        let httpException = (0, class_transformer_1.plainToClass)(common_1.HttpException, exception);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        errorResponse.statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        errorResponse.path = request.url;
        errorResponse.message = " Exception encountered! our engineers have been alerted";
        if ((exception instanceof common_1.HttpException)) {
            errorResponse.statusCode = httpException.getStatus();
            errorResponse.message = httpException.message;
            this.logger.error(errorResponse.errorId.toString(), httpException.stack);
        }
        else {
            let err = exception;
            this.logger.error(errorResponse.errorId.toString(), err.stack);
            if (err.message != null && err.name != null) {
                errorResponse.message = err.name + ":" + err.message;
            }
        }
        response
            .status(errorResponse.statusCode)
            .json(errorResponse);
    }
};
exports.RuntimeExceptionFilter = RuntimeExceptionFilter;
exports.RuntimeExceptionFilter = RuntimeExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [custom_logger_service_1.CustomLogger])
], RuntimeExceptionFilter);
//# sourceMappingURL=runtimeException.filter.js.map