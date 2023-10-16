import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { VariationTypeVolumeIdConnectionValidator } from "./VariationTypeVolumeIdConnectionValidator.js";
import { IProductVariationFieldsValidator } from "../../../../interfaces/validators/fieldsValidators/IProductVariationFieldsValidator.js";
import { ProductVariation } from "../../../ProductVariation.js";
import { VariationTypeQuantityConnectionValidator } from "./VariationTypeQuantityConnectionValidator.js";

export class ProductVariationFieldsValidator
  extends BaseFieldsValidator
  implements IProductVariationFieldsValidator
{
  public idValidator(id: ProductVariation["id"] | undefined) {
    this.assertsDefined(id, "ProductVariation id cannot be empty");

    return id;
  }

  public variationVolumeIdValidator(
    variationVolumeId: ProductVariation["variationVolumeId"] | undefined,
  ) {
    return this.getValueOrDefault(variationVolumeId, null);
  }

  public descriptionValidator(
    description: ProductVariation["description"] | undefined,
  ) {
    return this.getValueOrDefault(description, null);
  }

  public productIdValidator(
    productId: ProductVariation["productId"] | undefined,
  ) {
    this.assertsDefined(
      productId,
      "ProductVariation productId cannot be empty",
    );

    return productId;
  }

  public quantityValidator(quantity: ProductVariation["quantity"] | undefined) {
    return this.getValueOrDefault(quantity, null);
  }

  public variationTypeValidator(
    variationType: ProductVariation["variationType"] | undefined,
  ) {
    this.assertsDefined(
      variationType,
      "ProductVariation variationType cannot be empty",
    );

    return variationType;
  }

  public variationTypeVolumeIdConnectionValidator =
    new VariationTypeVolumeIdConnectionValidator().validator;

  public variationTypeQuantityConnectionValidator =
    new VariationTypeQuantityConnectionValidator().validator;
}
