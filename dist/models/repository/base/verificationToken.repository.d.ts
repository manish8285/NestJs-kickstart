import { DataSource, Repository } from "typeorm";
import { VerificationToken } from 'models/schema';
export declare class VerificationTokenRepository extends Repository<VerificationToken> {
    private dataSource;
    constructor(dataSource: DataSource);
    createVerificationToken(email: string, token: string): Promise<VerificationToken>;
    findByToken(token: string): Promise<VerificationToken>;
    deleteToken(token: VerificationToken): Promise<void>;
    findByEmail(email: string): Promise<VerificationToken>;
}
