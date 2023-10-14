import {
  ICreateProductVariation,
  IProductVariation,
  ProductVariation,
} from "../domain/models/ProductVariation.js";
import { IProductVariationService } from "../domain/interfaces/services/IProductVariationService.js";
import { IProductVariationRepository } from "../domain/interfaces/repositories/IProductVariationRepository.js";

export class ProductVariationService implements IProductVariationService {
  constructor(
    private productVariationRepository: IProductVariationRepository,
  ) {}

  public getAll(): Promise<IProductVariation[]> {
    return this.productVariationRepository.getAll();
  }

  public getOneById(id: IdType): Promise<IProductVariation> {
    return this.productVariationRepository.getOneById(id);
  }

  public create(data: ICreateProductVariation): Promise<IProductVariation> {
    ProductVariation.validator.createValidator(data);

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
    ProductVariation.validator.updateValidator(data);

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
