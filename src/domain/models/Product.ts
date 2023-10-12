import { Product as IProduct } from "@prisma/client";

export class Product implements IProduct {
  constructor(
    public id: IProduct["id"],
    public name: IProduct["name"],
  ) {}

  // Methods for business-logic and validation
}
