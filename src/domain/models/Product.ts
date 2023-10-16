import { Prisma, Product as PrismaProduct } from "@prisma/client";
import { IProductValidator } from "../interfaces/validators/modelsValidators/IProductValidator.js";
import { ProductValidator } from "./validators/modelValidators/ProductValidator.js";

export interface IProduct extends PrismaProduct {}

export interface ICreateProduct extends Prisma.ProductUncheckedCreateInput {}

export class Product implements IProduct {
  private productValidator: IProductValidator = new ProductValidator();

  public id: IProduct["id"];
  public name: IProduct["name"];

  constructor(data: IProduct) {
    const validatedData = this.productValidator.createValidator(data);

    this.id = this.productValidator.idValidator(data.id);

    this.name = validatedData.name;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
