import { IVariationVolumeFieldsValidator } from "../../../interfaces/validators/fieldsValidators/IVariationVolumeFieldsValidator.js";
import { IVariationVolumeValidator } from "../../../interfaces/validators/modelsValidators/IVariationVolumeValidator.js";
import { VariationVolumeFieldsValidator } from "../fieldsValidators/VariationVolumeFieldsValidators/VariationVolumeFieldsValidator.js";
import {
  ICreateVariationVolume,
  IVariationVolume,
} from "../../VariationVolume.js";

export class VariationVolumeValidator implements IVariationVolumeValidator {
  private fieldsValidator: IVariationVolumeFieldsValidator =
    new VariationVolumeFieldsValidator();

  public createValidator({
    dryCoefficient,
    name,
    priority,
    minCount,
  }: Omit<ICreateVariationVolume, "id">): Omit<IVariationVolume, "id"> {
    return {
      name: this.fieldsValidator.nameValidator(name),
      dryCoefficient:
        this.fieldsValidator.dryCoefficientValidator(dryCoefficient),
      minCount: this.fieldsValidator.minCountValidator(minCount),
      priority: this.fieldsValidator.priorityValidator(priority),
    };
  }

  public updateValidator<T extends Omit<IVariationVolume, "id">>({
    name,
    dryCoefficient,
    priority,
    minCount,
  }: Partial<T>): Partial<T> {
    const validatedData: Partial<T> = {};

    if (name !== undefined) {
      validatedData.name = this.fieldsValidator.nameValidator(name);
    }
    if (dryCoefficient !== undefined) {
      validatedData.dryCoefficient =
        this.fieldsValidator.dryCoefficientValidator(dryCoefficient);
    }
    if (priority !== undefined) {
      validatedData.priority = this.fieldsValidator.priorityValidator(priority);
    }
    if (minCount !== undefined) {
      validatedData.minCount = this.fieldsValidator.minCountValidator(minCount);
    }

    return validatedData;
  }

  public idValidator(id: IVariationVolume["id"] | undefined) {
    return this.fieldsValidator.idValidator(id);
  }
}
