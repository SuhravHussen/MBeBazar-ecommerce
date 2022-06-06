export interface product {
  _id?: string;
  title: string;
  price: number;
  offerPrice: number;
  details: string;
  unit: string;
  stock: number;
  tags: Array<string>;
  onSale: boolean;
  images: Array<string>;
  featured: Array<string>;
  category: string;
  sold: number;
  show: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
