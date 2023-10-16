import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { IVariationVolumeFieldsValidator } from "../../../../domain/interfaces/validators/fieldsValidators/IVariationVolumeFieldsValidator.js";
import { IVariationVolume } from "../../../../domain/models/VariationVolume.js";

export class VariationVolumeFieldsValidator
  extends BaseFieldsValidator
  implements IVariationVolumeFieldsValidator
{
  public idValidator(id: IVariationVolume["id"] | undefined) {
    this.assertsDefined(id, "VariationVolume id cannot be empty");

    return id;
  }

  public dryCoefficientValidator(
    dryCoefficient: IVariationVolume["dryCoefficient"] | undefined,
  ) {
    this.assertsDefined(
      dryCoefficient,
      "VariationVolume dryCoefficient cannot be empty",
    );

    return dryCoefficient;
  }

  public minCountValidator(minCount: IVariationVolume["minCount"] | undefined) {
    this.assertsDefined(minCount, "VariationVolume minCount cannot be empty");

    return minCount;
  }

  public nameValidator(name: IVariationVolume["name"] | undefined) {
    this.assertsDefined(name, "VariationVolume name cannot be empty");

    return name;
  }

  public priorityValidator(priority: IVariationVolume["priority"] | undefined) {
    this.assertsDefined(priority, "VariationVolume priority cannot be empty");

    return priority;
  }
}
