import { Prisma, Product as PrismaProduct } from "@prisma/client";
import { ProductValidator } from "./validators/ProductValidator.js";

export interface IProduct extends PrismaProduct {}

export interface ICreateProduct extends Prisma.ProductUncheckedCreateInput {}

export class Product implements IProduct {
  public static validator = new ProductValidator();

  public id: IProduct["id"];
  public name: IProduct["name"];

  constructor(data: IProduct) {
    const validatedData = Product.validator.createValidator(data);

    this.id = Product.validator.idValidator(data.id);

    this.name = validatedData.name;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
