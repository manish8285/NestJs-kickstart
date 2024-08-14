import { DataSource, Repository } from "typeorm";
import { Role, User } from 'models/schema';
export declare class UserRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    findUserById(userId: number): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    saveUser(user: User): Promise<User>;
    assignRolesToUser(user: User, roles: Role[]): Promise<User>;
    unlockUserAccount(user: User): Promise<User>;
}
