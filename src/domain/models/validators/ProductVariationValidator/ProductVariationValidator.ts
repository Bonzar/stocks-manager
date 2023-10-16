import {
  ICreateProductVariation,
  IProductVariation,
} from "../../ProductVariation.js";
import { IProductVariationValidator } from "../../../interfaces/validators/IProductVariationValidator.js";
import { ProductVariationBaseValidator } from "./ProductVariationBaseValidator.js";

export class ProductVariationValidator
  extends ProductVariationBaseValidator
  implements IProductVariationValidator
{
  public createValidator = (
    createData: OmitId<ICreateProductVariation>,
  ): OmitId<IProductVariation> => {
    let validatedData: Partial<OmitId<IProductVariation>> = createData;

    validatedData = {
      ...validatedData,
      ...this.variationTypeVolumeIdConnectionValidator(validatedData),
    };

    validatedData = {
      ...validatedData,
      ...this.variationTypeQuantityConnectionValidator(validatedData),
    };

    return {
      description: this.descriptionValidator(
        validatedData.description ?? createData.description,
      ),
      productId: this.productIdValidator(
        validatedData.productId ?? createData.productId,
      ),
      quantity: this.quantityValidator(
        validatedData.quantity ?? createData.quantity,
      ),
      variationType: this.variationTypeValidator(
        validatedData.variationType ?? createData.variationType,
      ),
      variationVolumeId: this.variationVolumeIdValidator(
        validatedData.variationVolumeId ?? createData.variationVolumeId,
      ),
    };
  };

  public updateValidator<T extends OmitId<IProductVariation>>({
    productId,
    variationType,
    variationVolumeId,
    description,
    quantity,
  }: Partial<T>): Partial<T> {
    let validatedData: Partial<T> = {};

    if (variationVolumeId !== undefined) {
      validatedData.variationVolumeId =
        this.variationVolumeIdValidator(variationVolumeId);
    }

    if (variationType !== undefined) {
      validatedData.variationType = this.variationTypeValidator(variationType);
    }

    if (description !== undefined) {
      validatedData.description = this.descriptionValidator(description);
    }

    if (productId !== undefined) {
      validatedData.productId = this.productIdValidator(productId);
    }

    if (quantity !== undefined) {
      validatedData.quantity = this.quantityValidator(quantity);
    }

    validatedData = {
      ...validatedData,
      ...this.variationTypeVolumeIdConnectionValidator(validatedData),
    };

    validatedData = {
      ...validatedData,
      ...this.variationTypeQuantityConnectionValidator(validatedData),
    };

    return validatedData;
  }
}
