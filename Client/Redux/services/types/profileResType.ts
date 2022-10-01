import { iUser } from './../../../models/user.interface';
export interface ProfileRes {
data : iUser;
message : string;
error : boolean;
}