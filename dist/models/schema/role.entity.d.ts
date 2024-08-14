import { Permission } from './permission.entity';
export declare class Role {
    id: number;
    name: string;
    value: string;
    description: string;
    permissions: Permission[];
}
