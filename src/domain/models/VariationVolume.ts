import {
  Prisma,
  VariationVolume as PrismaVariationVolume,
} from "@prisma/client";
import { VariationVolumeValidator } from "./validators/VariationVolumeValidator.js";

export interface IVariationVolume extends PrismaVariationVolume {}

export interface ICreateVariationVolume
  extends Prisma.VariationVolumeUncheckedCreateInput {}

export class VariationVolume implements IVariationVolume {
  public static validator = new VariationVolumeValidator();

  public id: IVariationVolume["id"];
  public name: IVariationVolume["name"];
  public priority: IVariationVolume["priority"];
  public minCount: IVariationVolume["minCount"];
  public dryCoefficient: IVariationVolume["dryCoefficient"];

  constructor(data: IVariationVolume) {
    const validatedData = VariationVolume.validator.createValidator(data);

    this.id = VariationVolume.validator.idValidator(data.id);

    this.name = validatedData.name;
    this.priority = validatedData.priority;
    this.minCount = validatedData.minCount;
    this.dryCoefficient = validatedData.dryCoefficient;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
