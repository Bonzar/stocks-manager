import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { IVariationTypeVolumeIdConnectionValidatorData } from "../../../../domain/interfaces/validators/fieldsValidators/IProductVariationFieldsValidator.js";
import { exhaustiveCheck } from "../../../../utils/exhaustiveCheck.js";

export class VariationTypeVolumeIdConnectionValidator extends BaseFieldsValidator {
  constructor() {
    super();
    this.validator = this.validator.bind(this);
  }

  public validator({
    variationType,
    variationVolumeId,
  }: IVariationTypeVolumeIdConnectionValidatorData): IVariationTypeVolumeIdConnectionValidatorData {
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
}
