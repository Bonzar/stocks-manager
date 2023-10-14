import { DryPowder as PrismaDryPowder, Prisma } from "@prisma/client";
import { DryPowderValidator } from "./validators/DryPowderValidator.js";
import { IDryPowderValidator } from "../interfaces/validators/IDryPowderValidator.js";

export interface IDryPowder extends PrismaDryPowder {}

export interface ICreateDryPowder
  extends Prisma.DryPowderUncheckedCreateInput {}

export class DryPowder implements IDryPowder {
  private dryPowderValidator: IDryPowderValidator = new DryPowderValidator();

  public id: IDryPowder["id"];
  public code: IDryPowder["code"];
  public quantity: IDryPowder["quantity"];
  public productId: IDryPowder["productId"];

  constructor(data: IDryPowder) {
    const validatedData = this.dryPowderValidator.createValidator(data);

    this.id = this.dryPowderValidator.idValidator(data.id);

    this.code = validatedData.code;
    this.quantity = validatedData.quantity;
    this.productId = validatedData.productId;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
