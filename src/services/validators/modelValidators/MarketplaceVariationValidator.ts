import { IMarketplaceVariationValidator } from "../../../domain/interfaces/validators/modelsValidators/IMarketplaceVariationValidator.js";
import {
  ICreteMarketplaceVariation,
  IMarketplaceVariation,
} from "../../../domain/models/MarketplaceVariation.js";
import { MarketplaceVariationFieldsValidator } from "../fieldsValidators/MarketplaceVariationFieldsValidator/MarketplaceVariationFieldsValidator.js";
import { IMarketplaceVariationFieldsValidator } from "../../../domain/interfaces/validators/fieldsValidators/IMarketplaceVariationFieldsValidator.js";

export class MarketplaceVariationValidator
  implements IMarketplaceVariationValidator
{
  private fieldsValidator: IMarketplaceVariationFieldsValidator =
    new MarketplaceVariationFieldsValidator();

  public async createValidator({
    marketplaceId,
    quantityOnMarketplace,
    productVariationId,
    isActive,
    externalId,
  }: OmitId<ICreteMarketplaceVariation>): Promise<
    OmitId<IMarketplaceVariation>
  > {
    return {
      marketplaceId: this.fieldsValidator.marketplaceIdValidator(marketplaceId),
      quantityOnMarketplace:
        this.fieldsValidator.quantityOnMarketplaceValidator(
          quantityOnMarketplace,
        ),
      productVariationId:
        this.fieldsValidator.productVariationIdValidator(productVariationId),
      isActive: this.fieldsValidator.isActiveValidator(isActive),
      externalId: this.fieldsValidator.externalIdValidator(externalId),
    };
  }

  public async updateValidator<T extends OmitId<ICreteMarketplaceVariation>>({
    marketplaceId,
    quantityOnMarketplace,
    productVariationId,
    isActive,
    externalId,
  }: Partial<T>): Promise<Partial<T>> {
    const validationData: Partial<T> = {};

    if (marketplaceId !== undefined) {
      validationData.marketplaceId =
        this.fieldsValidator.marketplaceIdValidator(marketplaceId);
    }

    if (quantityOnMarketplace !== undefined) {
      validationData.quantityOnMarketplace =
        this.fieldsValidator.quantityOnMarketplaceValidator(
          quantityOnMarketplace,
        );
    }

    if (productVariationId !== undefined) {
      validationData.productVariationId =
        this.fieldsValidator.productVariationIdValidator(productVariationId);
    }

    if (isActive !== undefined) {
      validationData.isActive =
        this.fieldsValidator.isActiveValidator(isActive);
    }

    if (externalId !== undefined) {
      validationData.externalId =
        this.fieldsValidator.externalIdValidator(externalId);
    }

    return validationData;
  }

  public idValidator(
    id: IMarketplaceVariation["id"] | undefined,
  ): IMarketplaceVariation["id"] {
    return this.fieldsValidator.idValidator(id);
  }
}
