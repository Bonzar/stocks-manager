import { IBaseValidator } from "./IBaseValidator.js";
import { ICreateDryPowder, IDryPowder } from "../DryPowder.js";
import { Omit } from "@prisma/client/runtime/library.js";

export class DryPowderValidator
  implements IBaseValidator<IDryPowder, ICreateDryPowder>
{
  public createValidator({
    code,
    quantity,
    productId,
  }: Omit<ICreateDryPowder, "id">): Omit<IDryPowder, "id"> {
    return {
      code: this.codeValidator(code),
      quantity: this.quantityValidator(quantity),
      productId: this.productIdValidator(productId),
    };
  }

  public updateValidator({
    code,
    quantity,
    productId,
  }: Partial<Omit<IDryPowder, "id">>): void {
    if (code !== undefined) {
      this.codeValidator(code);
    }
    if (quantity !== undefined) {
      this.quantityValidator(quantity);
    }
    if (productId !== undefined) {
      this.productIdValidator(productId);
    }
  }

  public idValidator(id: IDryPowder["id"] | undefined): IDryPowder["id"] {
    if (id === undefined) {
      throw new Error("DryPowder id cannot be empty");
    }

    return id;
  }

  private codeValidator(
    code: IDryPowder["code"] | undefined,
  ): IDryPowder["code"] {
    if (code === undefined) {
      code = null;
    }

    return code;
  }

  private productIdValidator(
    productId: IDryPowder["productId"] | undefined,
  ): IDryPowder["productId"] {
    if (productId === undefined) {
      throw new Error("DryPowder productId cannot be empty");
    }

    return productId;
  }

  private quantityValidator(
    quantity: IDryPowder["quantity"] | undefined,
  ): IDryPowder["quantity"] {
    if (quantity === undefined) {
      throw new Error("DryPowder quantity cannot be empty");
    }

    return quantity;
  }
}
