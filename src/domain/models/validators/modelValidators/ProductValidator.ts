import { ICreateProduct, IProduct } from "../../Product.js";
import { IProductValidator } from "../../../interfaces/validators/modelsValidators/IProductValidator.js";
import { IProductFieldsValidator } from "../../../interfaces/validators/fieldsValidators/IProductFieldsValidator.js";
import { ProductFieldsValidator } from "../fieldsValidators/ProductFieldsValidators/ProductFieldsValidator.js";

export class ProductValidator implements IProductValidator {
  private fieldsValidator: IProductFieldsValidator =
    new ProductFieldsValidator();

  public createValidator({ name }: OmitId<ICreateProduct>): OmitId<IProduct> {
    return {
      name: this.fieldsValidator.nameValidator(name),
    };
  }

  public updateValidator<T extends OmitId<IProduct>>({
    name,
  }: Partial<T>): Partial<T> {
    const validatedData: Partial<T> = {};

    if (name !== undefined) {
      validatedData.name = this.fieldsValidator.nameValidator(name);
    }

    return validatedData;
  }

  public idValidator(id: IProduct["id"] | undefined) {
    return this.fieldsValidator.idValidator(id);
  }
}
