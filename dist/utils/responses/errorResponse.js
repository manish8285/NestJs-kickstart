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
exports.ErrorResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class ErrorResponse {
    constructor() {
        this.error = true;
        this.errorId = new Date().getTime();
        this.timestamp = new Date();
    }
}
exports.ErrorResponse = ErrorResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: "every time value is `true` for error response" }),
    __metadata("design:type", Boolean)
], ErrorResponse.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1605516011758, description: "Error Id - It is unix timestamp of the error" }),
    __metadata("design:type", Number)
], ErrorResponse.prototype, "errorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 400, description: "Http response code. 400-Bad Request, 403 - Forbidden Exception, 404 - Not Found, 500 - Internal Server Exception" }),
    __metadata("design:type", Number)
], ErrorResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2020-11-16T08:40:11.758Z", description: "Time at which error occurred" }),
    __metadata("design:type", Date)
], ErrorResponse.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "/users", description: "API for which error encountered" }),
    __metadata("design:type", String)
], ErrorResponse.prototype, "path", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "User Not found with Id x", description: "Description about the error" }),
    __metadata("design:type", String)
], ErrorResponse.prototype, "message", void 0);
//# sourceMappingURL=errorResponse.js.map