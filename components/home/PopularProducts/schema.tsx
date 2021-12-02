export interface PopularProductsSchema {
    title: string;
    onSale: boolean;
    vendorName: string;
    actualPrice: number;
    offerPrice: number;
    id: string;
    ratings: number;
    image: Array<string>;
    category: string;
}
