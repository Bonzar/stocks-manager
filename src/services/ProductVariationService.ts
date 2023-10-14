import { ProductVariationValidator } from "../domain/models/validators/ProductVariationValidator.js";
import {
  ICreateProductVariation,
  IProductVariation,
  ProductVariation,
} from "../domain/models/ProductVariation.js";
import type { IProductVariationService } from "../domain/interfaces/services/IProductVariationService.js";
import type { IProductVariationRepository } from "../domain/interfaces/repositories/IProductVariationRepository.js";
import type { IProductVariationValidator } from "../domain/interfaces/validators/IProductVariationValidator.js";

export class ProductVariationService implements IProductVariationService {
  constructor(
    private productVariationRepository: IProductVariationRepository,
    private productVariationValidator: IProductVariationValidator = new ProductVariationValidator(),
  ) {}

  public getAll(): Promise<IProductVariation[]> {
    return this.productVariationRepository.getAll();
  }

  public getOneById(id: IdType): Promise<IProductVariation> {
    return this.productVariationRepository.getOneById(id);
  }

  public create(data: ICreateProductVariation): Promise<IProductVariation> {
    this.productVariationValidator.createValidator(data);

    const { productId, variationVolumeId, ...otherData } = data;

    return this.productVariationRepository.create({
      ...otherData,
      product: { connect: { id: data.productId } },
      variationVolume:
        data.variationVolumeId === undefined || data.variationVolumeId === null
          ? undefined
          : { connect: { id: data.variationVolumeId } },
    });
  }

  public updateOneById(
    id: IdType,
    data: Partial<IProductVariation>,
  ): Promise<IProductVariation> {
    this.productVariationValidator.updateValidator(data);

    return this.productVariationRepository.updateOneById(id, data);
  }

  public deleteOneById(id: IdType): Promise<IProductVariation> {
    return this.productVariationRepository.deleteOneById(id);
  }

  public toDomainModel(
    productVariationDto: IProductVariation,
  ): ProductVariation {
    return new ProductVariation(productVariationDto);
  }
}
