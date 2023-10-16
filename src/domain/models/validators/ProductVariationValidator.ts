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

  private variationTypeVolumeIdConnectionValidator<
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

  private variationTypeQuantityConnectionValidator<
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
