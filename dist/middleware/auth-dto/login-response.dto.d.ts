import { IAuthResponse } from "../auth.interface";
import { BaseResponse } from "utils/responses/baseResponse.dto";
export declare class LoginResDto extends BaseResponse implements IAuthResponse {
    email: string;
    token: string;
}
