import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { exhaustiveCheck } from "../../../../../utils/exhaustiveCheck.js";
import { IVariationTypeQuantityConnectionValidatorData } from "../../../../interfaces/validators/fieldsValidators/IProductVariationFieldsValidator.js";

export class VariationTypeQuantityConnectionValidator extends BaseFieldsValidator {
  public validator({
    variationType,
    quantity,
  }: IVariationTypeQuantityConnectionValidatorData): IVariationTypeQuantityConnectionValidatorData {
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
