import {
  Prisma,
  VariationVolume as PrismaVariationVolume,
} from "@prisma/client";
import { VariationVolumeValidator } from "./validators/VariationVolumeValidator.js";
import { IVariationVolumeValidator } from "../interfaces/validators/IVariationVolumeValidator.js";

export interface IVariationVolume extends PrismaVariationVolume {}

export interface ICreateVariationVolume
  extends Prisma.VariationVolumeUncheckedCreateInput {}

export class VariationVolume implements IVariationVolume {
  private variationVolumeValidator: IVariationVolumeValidator =
    new VariationVolumeValidator();

  public id: IVariationVolume["id"];
  public name: IVariationVolume["name"];
  public priority: IVariationVolume["priority"];
  public minCount: IVariationVolume["minCount"];
  public dryCoefficient: IVariationVolume["dryCoefficient"];

  constructor(data: IVariationVolume) {
    const validatedData = this.variationVolumeValidator.createValidator(data);

    this.id = this.variationVolumeValidator.idValidator(data.id);

    this.name = validatedData.name;
    this.priority = validatedData.priority;
    this.minCount = validatedData.minCount;
    this.dryCoefficient = validatedData.dryCoefficient;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
