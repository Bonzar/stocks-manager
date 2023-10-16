import { IDryPowderValidator } from "../../../domain/interfaces/validators/modelsValidators/IDryPowderValidator.js";
import { IDryPowderFieldsValidator } from "../../../domain/interfaces/validators/fieldsValidators/IDryPowderFieldsValidator.js";
import { DryPowderFieldsValidator } from "../fieldsValidators/DryPowderFieldsValidators/DryPowderFieldsValidator.js";
import {
  ICreateDryPowder,
  IDryPowder,
} from "../../../domain/models/DryPowder.js";

export class DryPowderValidator implements IDryPowderValidator {
  private fieldsValidator: IDryPowderFieldsValidator =
    new DryPowderFieldsValidator();

  public async createValidator({
    code,
    quantity,
    productId,
  }: OmitId<ICreateDryPowder>): Promise<OmitId<IDryPowder>> {
    return {
      code: this.fieldsValidator.codeValidator(code),
      quantity: this.fieldsValidator.quantityValidator(quantity),
      productId: this.fieldsValidator.productIdValidator(productId),
    };
  }

  public async updateValidator<T extends OmitId<IDryPowder>>({
    code,
    quantity,
    productId,
  }: Partial<T>): Promise<Partial<T>> {
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
