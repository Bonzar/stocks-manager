import { ICreateProduct, IProduct, Product } from "../domain/models/Product.js";
import { IProductService } from "../domain/interfaces/services/IProductService.js";
import { IProductRepository } from "../domain/interfaces/repositories/IProductRepository.js";

export class ProductService implements IProductService {
  constructor(private productRepository: IProductRepository) {}

  public getAll(): Promise<IProduct[]> {
    return this.productRepository.getAll();
  }

  public getOneById(id: IdType): Promise<IProduct> {
    return this.productRepository.getOneById(id);
  }

  public create(data: ICreateProduct): Promise<IProduct> {
    Product.validator.createValidator(data);

    return this.productRepository.create(data);
  }

  public updateOneById(id: IdType, data: Partial<IProduct>): Promise<IProduct> {
    Product.validator.updateValidator(data);

    return this.productRepository.updateOneById(id, data);
  }

  public deleteOneById(id: IdType): Promise<IProduct> {
    return this.productRepository.deleteOneById(id);
  }

  public toDomainModel(productDto: IProduct): Product {
    return new Product(productDto);
  }
}
