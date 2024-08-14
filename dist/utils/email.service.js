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
exports.EmailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const custom_logger_service_1 = require("./logger/custom-logger.service");
let EmailService = class EmailService {
    constructor(mailService, logger) {
        this.mailService = mailService;
        this.logger = logger;
    }
    async sendTextMail(toEmail, subject, textBody, fromEmail) {
        this.mailService.sendMail({
            to: toEmail,
            from: fromEmail,
            subject: subject,
            text: textBody,
        }).then(() => {
            this.logger.log("email success");
        });
    }
    async sendTemplateMail(toEmail, subject, htmlBody, fromEmail) {
        this.mailService.sendMail({
            to: toEmail,
            from: fromEmail,
            subject: subject,
            html: htmlBody
        })
            .then(() => { });
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        custom_logger_service_1.CustomLogger])
], EmailService);
//# sourceMappingURL=email.service.js.map