import { Role, User } from 'models/schema';
import { DataSource, Repository } from "typeorm";
export declare class UserRoleRepository extends Repository<User> {
    private dataSource;
    constructor(dataSource: DataSource);
    assignRolesToUser(user: User, roles: Role[]): Promise<User>;
    removeRolesFromUser(user: User, rolesToRemove: Role[]): Promise<User>;
    getUsersByRoleValue(roleValue: string): Promise<User[]>;
    getUserRoles(id: number): Promise<Role[]>;
}
