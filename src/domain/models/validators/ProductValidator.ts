import { ICreateProduct, IProduct } from "../Product.js";
import { BaseValidator } from "./BaseValidator.js";
import { IProductValidator } from "../../interfaces/validators/IProductValidator.js";

export class ProductValidator
  extends BaseValidator
  implements IProductValidator
{
  public createValidator({ name }: OmitId<ICreateProduct>): OmitId<IProduct> {
    return {
      name: this.nameValidator(name),
    };
  }

  public updateValidator<T extends OmitId<IProduct>>({
    name,
  }: Partial<T>): Partial<T> {
    const validatedData: Partial<T> = {};

    if (name !== undefined) {
      validatedData.name = this.nameValidator(name);
    }

    return validatedData;
  }

  public idValidator(id: IProduct["id"] | undefined) {
    this.assertsDefined(id, "Product id cannot be empty");

    return id;
  }

  public nameValidator(name: IProduct["name"] | undefined) {
    this.assertsDefined(name, "Product name cannot be empty");

    return name;
  }
}
