import { Prisma, Product as PrismaProduct } from "@prisma/client";

export interface IProduct extends PrismaProduct {}

export interface ICreateProduct extends Prisma.ProductUncheckedCreateInput {}

export class Product implements IProduct {
  public id: IProduct["id"];
  public name: IProduct["name"];

  constructor(data: IProduct) {
    this.id = data.id;
    this.name = data.name;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
