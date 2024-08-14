import { DataSource, Repository } from "typeorm";
import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { Role, User } from 'models/schema';


@Injectable()
export class UserRepository extends Repository<User>
{
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  
  async findUserById(userId: number): Promise<User> {
    const user = await this.findOne({ where: { id: userId }, relations: ['roles'] });
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException("User not found with this email");
    }
    return user;
  }

  async saveUser(user: User): Promise<User> {
    return await this.save(user);
  }

  async assignRolesToUser(user: User, roles: Role[]): Promise<User> {
    user.roles = [...user.roles, ...roles];
    return await this.save(user);
  }

  async unlockUserAccount(user: User): Promise<User> {
    user.isAccountLocked = false;
    return await this.save(user);
  }
}