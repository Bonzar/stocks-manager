import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { IMarketplaceVariationFieldsValidator } from "../../../../domain/interfaces/validators/fieldsValidators/IMarketplaceVariationFieldsValidator.js";
import { IMarketplaceVariation } from "../../../../domain/models/MarketplaceVariation.js";

export class MarketplaceVariationFieldsValidator
  extends BaseFieldsValidator
  implements IMarketplaceVariationFieldsValidator
{
  public idValidator(id: IMarketplaceVariation["id"] | undefined) {
    this.assertsDefined(id, "MarketplaceVariation id cannot be empty");

    return id;
  }

  public externalIdValidator(
    externalId: IMarketplaceVariation["externalId"] | undefined,
  ) {
    this.assertsDefined(
      externalId,
      "MarketplaceVariation externalId cannot be empty",
    );

    return externalId;
  }

  public isActiveValidator(
    isActive: IMarketplaceVariation["isActive"] | undefined,
  ) {
    return this.getValueOrDefault(isActive, true);
  }

  public marketplaceIdValidator(
    marketplaceId: IMarketplaceVariation["marketplaceId"] | undefined,
  ) {
    this.assertsDefined(
      marketplaceId,
      "MarketplaceVariation marketplaceId cannot be empty",
    );

    return marketplaceId;
  }

  public productVariationIdValidator(
    productVariationId: IMarketplaceVariation["productVariationId"] | undefined,
  ) {
    this.assertsDefined(
      productVariationId,
      "MarketplaceVariation productVariationId cannot be empty",
    );

    return productVariationId;
  }

  public quantityOnMarketplaceValidator(
    quantityOnMarketplace:
      | IMarketplaceVariation["quantityOnMarketplace"]
      | undefined,
  ) {
    return this.getValueOrDefault(quantityOnMarketplace, null);
  }
}
