import { iProduct } from "../../../models/product.interface";

export interface ProductsRes {
    data : iProduct[];
    error : boolean;
    message : string;
}