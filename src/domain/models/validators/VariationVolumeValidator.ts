import { IValidator } from "./IValidator.js";
import {
  ICreateVariationVolume,
  IVariationVolume,
} from "../VariationVolume.js";
import { BaseValidator } from "./BaseValidator.js";

export class VariationVolumeValidator
  extends BaseValidator
  implements IValidator<IVariationVolume, ICreateVariationVolume>
{
  public createValidator({
    dryCoefficient,
    name,
    priority,
    minCount,
  }: Omit<ICreateVariationVolume, "id">): Omit<IVariationVolume, "id"> {
    return {
      name: this.nameValidator(name),
      dryCoefficient: this.dryCoefficientValidator(dryCoefficient),
      minCount: this.minCountValidator(minCount),
      priority: this.priorityValidator(priority),
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
      validatedData.name = this.nameValidator(name);
    }
    if (dryCoefficient !== undefined) {
      validatedData.dryCoefficient =
        this.dryCoefficientValidator(dryCoefficient);
    }
    if (priority !== undefined) {
      validatedData.priority = this.priorityValidator(priority);
    }
    if (minCount !== undefined) {
      validatedData.minCount = this.minCountValidator(minCount);
    }

    return validatedData;
  }

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
