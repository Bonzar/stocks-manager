import { ICreateDryPowder, IDryPowder } from "../../DryPowder.js";
import { BaseFieldsValidator } from "../fieldsValidators/base/BaseFieldsValidator.js";
import { IDryPowderValidator } from "../../../interfaces/validators/modelsValidators/IDryPowderValidator.js";
import { IDryPowderFieldsValidator } from "../../../interfaces/validators/fieldsValidators/IDryPowderFieldsValidator.js";
import { DryPowderFieldsValidator } from "../fieldsValidators/DryPowderFieldsValidators/DryPowderFieldsValidator.js";

export class DryPowderValidator
  extends BaseFieldsValidator
  implements IDryPowderValidator
{
  private fieldsValidator: IDryPowderFieldsValidator =
    new DryPowderFieldsValidator();

  public createValidator({
    code,
    quantity,
    productId,
  }: OmitId<ICreateDryPowder>): OmitId<IDryPowder> {
    return {
      code: this.fieldsValidator.codeValidator(code),
      quantity: this.fieldsValidator.quantityValidator(quantity),
      productId: this.fieldsValidator.productIdValidator(productId),
    };
  }

  public updateValidator<T extends OmitId<IDryPowder>>({
    code,
    quantity,
    productId,
  }: Partial<T>): Partial<T> {
    const validationData: Partial<T> = {};

    if (code !== undefined) {
      validationData.code = this.fieldsValidator.codeValidator(code);
    }
    if (quantity !== undefined) {
      validationData.quantity =
        this.fieldsValidator.quantityValidator(quantity);
    }
    if (productId !== undefined) {
      validationData.productId =
        this.fieldsValidator.productIdValidator(productId);
    }

    return validationData;
  }

  public idValidator(id: IDryPowder["id"] | undefined) {
    return this.fieldsValidator.idValidator(id);
  }
}
