import {
  ICreateProductVariation,
  IProductVariation,
  ProductVariation,
} from "../ProductVariation.js";
import { exhaustiveCheck } from "../../../utils/exhaustiveCheck.js";
import { BaseValidator } from "./BaseValidator.js";
import { IProductVariationValidator } from "../../interfaces/validators/IProductVariationValidator.js";

export class ProductVariationValidator
  extends BaseValidator
  implements IProductVariationValidator
{
  public createValidator = (
    createData: OmitId<ICreateProductVariation>,
  ): OmitId<IProductVariation> => {
    const variationType = this.variationTypeValidator(createData.variationType);
    const variationVolumeId = this.variationVolumeIdValidator(
      createData.variationVolumeId,
    );

    this.variationVolumeTypeConnectionValidator(
      variationVolumeId,
      variationType,
    );

    return {
      description: this.descriptionValidator(createData.description),
      productId: this.productIdValidator(createData.productId),
      quantity: this.quantityValidator(createData.quantity),
      variationType,
      variationVolumeId,
    };
  };

  public updateValidator<T extends OmitId<IProductVariation>>({
    productId,
    variationType,
    variationVolumeId,
    description,
    quantity,
  }: Partial<T>): Partial<T> {
    const validatedData: Partial<T> = {};

    if (variationVolumeId !== undefined || variationType !== undefined) {
      if (variationVolumeId === undefined || variationType === undefined) {
        throw new Error(
          "When updating variationVolumeId OR variationType in ProductVariation its both should be present",
        );
      }

      validatedData.variationType = this.variationTypeValidator(variationType);
      validatedData.variationVolumeId =
        this.variationVolumeIdValidator(variationVolumeId);

      this.variationVolumeTypeConnectionValidator(
        validatedData.variationVolumeId,
        validatedData.variationType,
      );
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

    return validatedData;
  }

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
    this.assertsDefined(quantity, "ProductVariation quantity cannot be empty");

    return quantity;
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

  private variationVolumeTypeConnectionValidator(
    variationVolumeId: ProductVariation["variationVolumeId"],
    variationType: ProductVariation["variationType"],
  ) {
    switch (variationType) {
      case "SIMPLE":
        break;
      case "SET":
        if (variationVolumeId !== null) {
          throw new Error(
            "ProductVariation when variationType == SET, variationVolumeId should be Null",
          );
        }
        break;
      default: {
        exhaustiveCheck(variationType);
      }
    }
  }
}
