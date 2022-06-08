import { Document } from 'mongoose';
export interface product extends Document {
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

export interface paginationProducts {
  limit: number;
  hasPrevPage: Boolean;
  hasNextPage: Boolean;
  hasMore: Boolean;
  docs: Array<product>;
  totalDocs: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  previousPage?: number | undefined;
  nextPage: number;
}
