import { DryPowder as IDryPowder } from "@prisma/client";

export class DryPowder implements IDryPowder {
  constructor(
    public id: IDryPowder["id"],
    public code: IDryPowder["code"],
    public quantity: IDryPowder["quantity"],
    public productId: IDryPowder["productId"],
  ) {}

  // Methods for business-logic and validation
}
