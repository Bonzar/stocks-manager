import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { IProductFieldsValidator } from "../../../../domain/interfaces/validators/fieldsValidators/IProductFieldsValidator.js";
import { IProduct } from "../../../../domain/models/Product.js";

export class ProductFieldsValidator
  extends BaseFieldsValidator
  implements IProductFieldsValidator
{
  public idValidator(id: IProduct["id"] | undefined) {
    this.assertsDefined(id, "Product id cannot be empty");

    return id;
  }

  public nameValidator(name: IProduct["name"] | undefined) {
    this.assertsDefined(name, "Product name cannot be empty");

    return name;
  }
}
