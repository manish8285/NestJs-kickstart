import { DataSource, Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { VerificationToken } from 'models/schema';

@Injectable()
export class VerificationTokenRepository extends Repository<VerificationToken>
{
  
  constructor(private dataSource: DataSource) {
    super(VerificationToken, dataSource.createEntityManager());
  }

  async createVerificationToken(email: string, token: string): Promise<VerificationToken> {
    let verificationToken = new VerificationToken();
    verificationToken.email = email;
    verificationToken.token = token;
    return await this.save(verificationToken);
  }

  async findByToken(token: string): Promise<VerificationToken> {
    const verificationToken = await this.findOne({ where: { token } });
    if (!verificationToken) {
      throw new NotFoundException("Verification token not found");
    }
    return verificationToken;
  }

  async deleteToken(token: VerificationToken): Promise<void> {
    await this.delete(token);
  }

  async findByEmail(email: string): Promise<VerificationToken> {
    const verificationToken = await this.findOne({ where: { email } });
    if (!verificationToken) {
      throw new NotFoundException("Verification token not found for this email");
    }
    return verificationToken;
  }
}