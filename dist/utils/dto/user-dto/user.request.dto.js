'use strict';
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
exports.UserReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const models_1 = require("../../../models");
const validators_1 = require("../../validators");
class UserReqDto {
    static transformToEntity(userReqDto) {
        return (0, class_transformer_1.plainToClass)(models_1.User, userReqDto);
    }
}
exports.UserReqDto = UserReqDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "test@mail.com", description: 'The email of user', required: true, uniqueItems: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserReqDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: "John", description: 'First name of the suer', required: true }),
    __metadata("design:type", String)
], UserReqDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Smith", description: 'Last name of the suer', required: false }),
    __metadata("design:type", String)
], UserReqDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Test@123", description: 'Minimum 8 letters, Alphanumeric, must contain atleast one capital letter, small letter, number and special character', required: true }),
    (0, validators_1.MatchRegex)("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"),
    (0, validators_1.MatchFieldValue)('confirmPassword'),
    __metadata("design:type", String)
], UserReqDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Test@123", description: 'Password and confirmPassword must match', required: true }),
    __metadata("design:type", String)
], UserReqDto.prototype, "confirmPassword", void 0);
//# sourceMappingURL=user.request.dto.js.map