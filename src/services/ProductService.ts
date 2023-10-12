import { Product } from "../domain/models/Product.js";
import { IProductService } from "../domain/interfaces/services/IProductService.js";
import { IProductRepository } from "../domain/interfaces/repositories/IProductRepository.js";
import { Prisma } from "@prisma/client";

export class ProductService implements IProductService {
  constructor(private productRepository: IProductRepository) {}

  getOneById(id: IdType): Promise<Product> {
    return this.productRepository.getOneById(id);
  }

  getAll(): Promise<Product[]> {
    return this.productRepository.getAll();
  }

  create(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.productRepository.create(data);
  }

  updateOneById(id: IdType, data: Prisma.ProductUpdateInput): Promise<Product> {
    return this.productRepository.updateOneById(id, data);
  }

  deleteOneById(id: IdType): Promise<Product> {
    return this.productRepository.deleteOneById(id);
  }
}
