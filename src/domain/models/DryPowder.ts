import { DryPowder as PrismaDryPowder, Prisma } from "@prisma/client";

export interface IDryPowder extends PrismaDryPowder {}

export interface ICreateDryPowder
  extends Prisma.DryPowderUncheckedCreateInput {}

export class DryPowder implements IDryPowder {
  public id: IDryPowder["id"];
  public code: IDryPowder["code"];
  public quantity: IDryPowder["quantity"];
  public productId: IDryPowder["productId"];

  constructor({ id, code, quantity, productId }: IDryPowder) {
    this.id = id;
    this.code = code;
    this.quantity = quantity;
    this.productId = productId;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
