import { Prisma, VariationSet as PrismaVariationSet } from "@prisma/client";
import { IVariationSetValidator } from "../interfaces/validators/modelsValidators/IVariationSetValidator.js";
import { VariationSetValidator } from "./validators/modelValidators/VariationSetValidator.js";

export interface IVariationSet extends PrismaVariationSet {}

export interface ICreateVariationSet
  extends Prisma.VariationSetUncheckedCreateInput {}

export class VariationSet implements IVariationSet {
  private variationSetValidator: IVariationSetValidator =
    new VariationSetValidator();

  public id: IVariationSet["id"];
  public componentVariationId: IVariationSet["componentVariationId"];
  public parentVariationId: IVariationSet["parentVariationId"];

  constructor(data: IVariationSet) {
    const validatedData = this.variationSetValidator.createValidator(data);

    this.id = this.variationSetValidator.idValidator(data.id);

    this.parentVariationId = validatedData.parentVariationId;
    this.componentVariationId = validatedData.componentVariationId;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
