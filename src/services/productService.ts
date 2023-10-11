import type { IProductRepository } from "../domain/interfaces/IProductRepository.js";
import type { IProductService } from "../domain/interfaces/IProductService.js";
import { Product } from "../domain/models/Product.js";

export class ProductService implements IProductService {
  constructor(private productRepository: IProductRepository) {}

  getProductById(productId: IdType): Promise<Product> {
    return this.productRepository.getOneById(productId);
  }

  getAllProducts(): Promise<Product[]> {
    return this.productRepository.getAll();
  }

  createProduct(name: string): Promise<Product> {
    return this.productRepository.create({ name });
  }

  updateProduct(
    productId: IdType,
    productData: Partial<Product>,
  ): Promise<Product> {
    return this.productRepository.updateOneById(productId, productData);
  }

  deleteProduct(productId: IdType): Promise<Product> {
    return this.productRepository.deleteOneById(productId);
  }
}
