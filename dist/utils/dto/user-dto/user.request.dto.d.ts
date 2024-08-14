import { User } from 'models';
export declare class UserReqDto {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly confirmPassword: string;
    static transformToEntity(userReqDto: UserReqDto): User;
}
