export interface iUser {
    name: string;
    email: string;
    address?: string;
    phone?: string;
    avatar?: string;
    toReview?: Array<string>;
}
