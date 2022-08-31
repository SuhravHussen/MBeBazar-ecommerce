export interface iUser {
    _id: string;
    name: string;
    email: string;
    address?: string;
    phone?: string;
    avatar?: string;
    toReview?: Array<string>;
}
