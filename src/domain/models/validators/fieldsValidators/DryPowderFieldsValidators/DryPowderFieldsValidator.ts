import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { IDryPowderFieldsValidator } from "../../../../interfaces/validators/fieldsValidators/IDryPowderFieldsValidator.js";
import { IDryPowder } from "../../../DryPowder.js";

export class DryPowderFieldsValidator
  extends BaseFieldsValidator
  implements IDryPowderFieldsValidator
{
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
