import {
  ICreateProductVariation,
  IProductVariation,
  ProductVariation,
} from "../ProductVariation.js";
import { IBaseValidator } from "./IBaseValidator.js";

export class ProductVariationValidator
  implements IBaseValidator<IProductVariation, ICreateProductVariation>
{
  public createValidator = ({
    productId,
    quantity,
    variationType,
    variationVolumeId,
    description,
  }: Omit<ICreateProductVariation, "id">): Omit<IProductVariation, "id"> => {
    return {
      description: this.descriptionValidator(description),
      productId: this.productIdValidator(productId),
      quantity: this.quantityValidator(quantity),
      variationType: this.variationTypeValidator(variationType),
      variationVolumeId: this.variationVolumeIdValidator(
        variationVolumeId,
        variationType,
      ),
    };
  };

  public updateValidator({
    productId,
    variationType,
    variationVolumeId,
    description,
    quantity,
  }: Partial<Omit<IProductVariation, "id">>) {
    if (variationType !== undefined) {
      this.variationTypeValidator(variationType);
    }

    if (variationVolumeId !== undefined) {
      this.variationVolumeIdValidator(variationVolumeId, variationType);
    }

    if (description !== undefined) {
      this.descriptionValidator(description);
    }

    if (productId !== undefined) {
      this.productIdValidator(productId);
    }

    if (quantity !== undefined) {
      this.quantityValidator(quantity);
    }
  }

  public idValidator(
    id: ProductVariation["id"] | undefined,
  ): ProductVariation["id"] {
    if (id === undefined) {
      throw new Error("ProductVariation id cannot be empty");
    }

    return id;
  }

  private variationVolumeIdValidator(
    variationVolumeId: ProductVariation["variationVolumeId"] | undefined,
    variationType?: ProductVariation["variationType"],
  ): ProductVariation["variationVolumeId"] {
    if (variationVolumeId === undefined) {
      variationVolumeId = null;
    }

    if (variationVolumeId !== null && variationType !== "SIMPLE") {
      throw new Error(
        "ProductVariation variationVolumeId can be set, only if variationType == SIMPLE",
      );
    }

    return variationVolumeId;
  }

  private descriptionValidator(
    description: ProductVariation["description"] | undefined,
  ): ProductVariation["description"] {
    if (description === undefined) {
      description = null;
    }

    return description;
  }

  private productIdValidator(
    productId: ProductVariation["productId"] | undefined,
  ): ProductVariation["productId"] {
    if (productId === undefined) {
      throw new Error("ProductVariation productId cannot be empty");
    }

    return productId;
  }

  private quantityValidator(
    quantity: ProductVariation["quantity"] | undefined,
  ): ProductVariation["quantity"] {
    if (quantity === undefined) {
      throw new Error("ProductVariation quantity cannot be empty");
    }

    return quantity;
  }

  private variationTypeValidator(
    variationType: ProductVariation["variationType"] | undefined,
  ): ProductVariation["variationType"] {
    if (variationType === undefined) {
      throw new Error("ProductVariation variationType cannot be empty");
    }

    return variationType;
  }
}
