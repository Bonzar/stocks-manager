import { Prisma, VariationSet as PrismaVariationSet } from "@prisma/client";

export interface IVariationSet extends PrismaVariationSet {}

export interface ICreateVariationSet
  extends Prisma.VariationSetUncheckedCreateInput {}

export class VariationSet implements IVariationSet {
  public id: IVariationSet["id"];
  public componentVariationId: IVariationSet["componentVariationId"];
  public parentVariationId: IVariationSet["parentVariationId"];

  constructor(data: IVariationSet) {
    this.id = data.id;
    this.parentVariationId = data.parentVariationId;
    this.componentVariationId = data.componentVariationId;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
