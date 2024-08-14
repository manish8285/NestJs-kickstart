import { Role } from './role.entity';
export declare class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    isAccountLocked: boolean;
    isActive: boolean;
    roles: Role[];
    hashPassword(): Promise<void>;
}
