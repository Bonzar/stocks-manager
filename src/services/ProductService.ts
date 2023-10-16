import type { IProductService } from "../domain/interfaces/services/IProductService.js";
import type { IProductRepository } from "../domain/interfaces/repositories/IProductRepository.js";
import type { ICreateProduct, IProduct } from "../domain/models/Product.js";
import { Product } from "../domain/models/Product.js";
import { IProductValidator } from "../domain/interfaces/validators/modelsValidators/IProductValidator.js";
import { ProductValidator } from "./validators/modelValidators/ProductValidator.js";

export class ProductService implements IProductService {
  constructor(
    private productRepository: IProductRepository,
    private productValidator: IProductValidator = new ProductValidator(),
  ) {}

  public getAll(): Promise<IProduct[]> {
    return this.productRepository.getAll();
  }

  public getOneById(id: IdType): Promise<IProduct> {
    return this.productRepository.getOneById(id);
  }

  public async create(data: ICreateProduct): Promise<IProduct> {
    const validatedData = await this.productValidator.createValidator(data);

    return this.productRepository.create(validatedData);
  }

  public async updateOneById(
    id: IdType,
    data: Partial<IProduct>,
  ): Promise<IProduct> {
    const validatedData = await this.productValidator.updateValidator(data);

    return this.productRepository.updateOneById(id, validatedData);
  }

  public deleteOneById(id: IdType): Promise<IProduct> {
    return this.productRepository.deleteOneById(id);
  }

  public async toDomainModel(productDto: IProduct): Promise<Product> {
    const id = this.productValidator.idValidator(productDto.id);

    const validatedData =
      await this.productValidator.createValidator(productDto);

    return new Product({ ...validatedData, id });
  }
}
