import { IBaseValidator } from "./IBaseValidator.js";
import { ICreateProduct, IProduct } from "../Product.js";
import { Omit } from "@prisma/client/runtime/library.js";

export class ProductValidator
  implements IBaseValidator<IProduct, ICreateProduct>
{
  public createValidator({
    name,
  }: Omit<ICreateProduct, "id">): Omit<IProduct, "id"> {
    return {
      name: this.nameValidator(name),
    };
  }

  public updateValidator({ name }: Partial<Omit<IProduct, "id">>): void {
    if (name !== undefined) {
      this.nameValidator(name);
    }
  }

  public idValidator(id: IProduct["id"] | undefined): IProduct["id"] {
    if (id === undefined) {
      throw new Error("Product id cannot be empty");
    }

    return id;
  }

  private nameValidator(name: IProduct["name"] | undefined): IProduct["name"] {
    if (name === undefined) {
      throw new Error("Product name cannot be empty");
    }

    return name;
  }
}
