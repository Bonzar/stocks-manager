import { Product } from "../models/Product.js";

export interface IProductService {
  getProductById(productId: IdType): Promise<Product>;

  getAllProducts(): Promise<Product[]>;

  createProduct(...data: unknown[]): Promise<Product>;

  updateProduct(
    productId: IdType,
    productData: Partial<Product>,
  ): Promise<Product>;

  deleteProduct(productId: IdType): Promise<Product>;
}
