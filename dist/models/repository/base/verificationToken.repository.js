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
exports.VerificationTokenRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const schema_1 = require("../../schema");
let VerificationTokenRepository = class VerificationTokenRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(schema_1.VerificationToken, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async createVerificationToken(email, token) {
        let verificationToken = new schema_1.VerificationToken();
        verificationToken.email = email;
        verificationToken.token = token;
        return await this.save(verificationToken);
    }
    async findByToken(token) {
        const verificationToken = await this.findOne({ where: { token } });
        if (!verificationToken) {
            throw new common_1.NotFoundException("Verification token not found");
        }
        return verificationToken;
    }
    async deleteToken(token) {
        await this.delete(token);
    }
    async findByEmail(email) {
        const verificationToken = await this.findOne({ where: { email } });
        if (!verificationToken) {
            throw new common_1.NotFoundException("Verification token not found for this email");
        }
        return verificationToken;
    }
};
exports.VerificationTokenRepository = VerificationTokenRepository;
exports.VerificationTokenRepository = VerificationTokenRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], VerificationTokenRepository);
//# sourceMappingURL=verificationToken.repository.js.map