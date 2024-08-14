import { MailerService } from "@nestjs-modules/mailer";
import { CustomLogger } from "./logger/custom-logger.service";
export declare class EmailService {
    private readonly mailService;
    private readonly logger;
    constructor(mailService: MailerService, logger: CustomLogger);
    sendTextMail(toEmail: string, subject: string, textBody: string, fromEmail: string): Promise<void>;
    sendTemplateMail(toEmail: string, subject: string, htmlBody: string, fromEmail: string): Promise<void>;
}
