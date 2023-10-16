import {
  ICreateProductVariation,
  IProductVariation,
  ProductVariation,
} from "../domain/models/ProductVariation.js";
import type { IProductVariationService } from "../domain/interfaces/services/IProductVariationService.js";
import type { IProductVariationRepository } from "../domain/interfaces/repositories/IProductVariationRepository.js";
import type { IProductVariationValidator } from "../domain/interfaces/validators/IProductVariationValidator.js";
import { ProductVariationValidator } from "../domain/models/validators/ProductVariationValidator/ProductVariationValidator.js";

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
    const validatedData = this.productVariationValidator.createValidator(data);

    const { productId, variationVolumeId, ...otherData } = validatedData;

    return this.productVariationRepository.create({
      ...otherData,
      product: { connect: { id: validatedData.productId } },
      variationVolume:
        validatedData.variationVolumeId === undefined ||
        validatedData.variationVolumeId === null
          ? undefined
          : { connect: { id: validatedData.variationVolumeId } },
    });
  }

  public updateOneById(
    id: IdType,
    data: Partial<IProductVariation>,
  ): Promise<IProductVariation> {
    const validatedData = this.productVariationValidator.updateValidator(data);

    return this.productVariationRepository.updateOneById(id, validatedData);
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
