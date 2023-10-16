import { IProductValidator } from "../../../domain/interfaces/validators/modelsValidators/IProductValidator.js";
import { IProductFieldsValidator } from "../../../domain/interfaces/validators/fieldsValidators/IProductFieldsValidator.js";
import { ProductFieldsValidator } from "../fieldsValidators/ProductFieldsValidators/ProductFieldsValidator.js";
import { ICreateProduct, IProduct } from "../../../domain/models/Product.js";

export class ProductValidator implements IProductValidator {
  private fieldsValidator: IProductFieldsValidator =
    new ProductFieldsValidator();

  public async createValidator({
    name,
  }: OmitId<ICreateProduct>): Promise<OmitId<IProduct>> {
    return {
      name: this.fieldsValidator.nameValidator(name),
    };
  }

  public async updateValidator<T extends OmitId<IProduct>>({
    name,
  }: Partial<T>): Promise<Partial<T>> {
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
