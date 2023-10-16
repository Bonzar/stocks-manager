import { BaseValidator } from "../base/BaseValidator.js";
import { FieldsValidators } from "../../../interfaces/validators/IValidator.js";
import { IProductVariation, ProductVariation } from "../../ProductVariation.js";
import { exhaustiveCheck } from "../../../../utils/exhaustiveCheck.js";

export class ProductVariationBaseValidator
  extends BaseValidator
  implements FieldsValidators<IProductVariation>
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

  protected variationTypeVolumeIdConnectionValidator<
    T extends {
      variationType?: ProductVariation["variationType"];
      variationVolumeId?: ProductVariation["variationVolumeId"];
    },
  >({
    variationType,
    variationVolumeId,
  }: T): {
    variationType: T["variationType"];
    variationVolumeId: T["variationVolumeId"];
  } {
    if (variationType === undefined && variationVolumeId === undefined) {
      return { variationType, variationVolumeId };
    }

    const variationVolumeIdValue = this.getValueOrDefault(
      variationVolumeId,
      null,
    );

    if (variationVolumeIdValue === null) {
      // variationId == null -> we can leave variationType as is

      return { variationType, variationVolumeId: variationVolumeIdValue };
    } else {
      // variationId exist -> we should know the type to check

      switch (variationType) {
        case "SIMPLE": {
          return { variationType, variationVolumeId: variationVolumeIdValue };
        }
        case "SET": {
          throw new Error(
            "In ProductVariation when variationType == SET, variationVolumeId should be Null",
          );
        }
        case undefined: {
          throw new Error(
            "For update `variationVolumeId` in ProductVariation, `variationType` should be specified",
          );
        }
        default: {
          exhaustiveCheck(variationType);
          throw new Error(
            "For update `variationVolumeId` in ProductVariation, `variationType` should be specified",
          );
        }
      }
    }
  }

  protected variationTypeQuantityConnectionValidator<
    T extends {
      variationType?: ProductVariation["variationType"];
      quantity?: ProductVariation["quantity"];
    },
  >({
    variationType,
    quantity,
  }: T): {
    variationType: T["variationType"];
    quantity: T["quantity"];
  } {
    if (variationType === undefined && quantity === undefined) {
      return { variationType, quantity };
    }

    const quantityValue = this.getValueOrDefault(quantity, null);

    switch (variationType) {
      case "SIMPLE": {
        if (quantityValue === null) {
          throw new Error(
            "In ProductVariation when variationType == SIMPLE, quantity should be Number",
          );
        }

        return { variationType, quantity: quantityValue };
      }
      case "SET": {
        if (quantityValue !== null) {
          throw new Error(
            "In ProductVariation when variationType == SET, quantity should be Null",
          );
        }

        return { variationType, quantity: quantityValue };
      }
      case undefined: {
        throw new Error(
          "For update `quantity` in ProductVariation, `variationType` should be specified",
        );
      }
      default: {
        exhaustiveCheck(variationType);
        throw new Error(
          "For update `quantity` in ProductVariation, `variationType` should be specified",
        );
      }
    }
  }
}
