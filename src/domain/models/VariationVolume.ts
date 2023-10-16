import {
  Prisma,
  VariationVolume as PrismaVariationVolume,
} from "@prisma/client";

export interface IVariationVolume extends PrismaVariationVolume {}

export interface ICreateVariationVolume
  extends Prisma.VariationVolumeUncheckedCreateInput {}

export class VariationVolume implements IVariationVolume {
  public id: IVariationVolume["id"];
  public name: IVariationVolume["name"];
  public priority: IVariationVolume["priority"];
  public minCount: IVariationVolume["minCount"];
  public dryCoefficient: IVariationVolume["dryCoefficient"];

  constructor(data: IVariationVolume) {
    this.id = data.id;
    this.name = data.name;
    this.priority = data.priority;
    this.minCount = data.minCount;
    this.dryCoefficient = data.dryCoefficient;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
