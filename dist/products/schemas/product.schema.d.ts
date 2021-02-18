import { Document } from 'mongoose';
export declare type ProductDocument = Product & Document;
export declare class Product {
    title: string;
    price: number;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product>, import("mongoose").Model<Document<Product>>>;
