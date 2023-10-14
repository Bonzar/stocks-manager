import { ICreateDryPowder, IDryPowder } from "../DryPowder.js";
import { BaseValidator } from "./BaseValidator.js";
import { IDryPowderValidator } from "../../interfaces/validators/IDryPowderValidator.js";

export class DryPowderValidator
  extends BaseValidator
  implements IDryPowderValidator
{
  public createValidator({
    code,
    quantity,
    productId,
  }: OmitId<ICreateDryPowder>): OmitId<IDryPowder> {
    return {
      code: this.codeValidator(code),
      quantity: this.quantityValidator(quantity),
      productId: this.productIdValidator(productId),
    };
  }

  public updateValidator<T extends OmitId<IDryPowder>>({
    code,
    quantity,
    productId,
  }: Partial<T>): Partial<T> {
    const validationData: Partial<T> = {};

    if (code !== undefined) {
      validationData.code = this.codeValidator(code);
    }
    if (quantity !== undefined) {
      validationData.quantity = this.quantityValidator(quantity);
    }
    if (productId !== undefined) {
      validationData.productId = this.productIdValidator(productId);
    }

    return validationData;
  }

  public idValidator(id: IDryPowder["id"] | undefined) {
    this.assertsDefined(id, "DryPowder id cannot be empty");

    return id;
  }

  public codeValidator(code: IDryPowder["code"] | undefined) {
    return this.getValueOrDefault(code, null);
  }

  public productIdValidator(productId: IDryPowder["productId"] | undefined) {
    this.assertsDefined(productId, "DryPowder productId cannot be empty");

    return productId;
  }

  public quantityValidator(quantity: IDryPowder["quantity"] | undefined) {
    this.assertsDefined(quantity, "DryPowder quantity cannot be empty");

    return quantity;
  }
}
