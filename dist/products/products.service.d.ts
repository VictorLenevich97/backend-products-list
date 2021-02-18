import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product>;
    create(productDto: CreateProductDto): Promise<Product>;
    remove(id: string): Promise<Product>;
    update(productDto: UpdateProductDto, id: string): Promise<Product>;
}
