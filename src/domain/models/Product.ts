import { Product as IProduct } from "@prisma/client";

export interface CreateProductInput {
  name: IProduct["name"];
}

export class Product implements IProduct {
  constructor(
    public id: IProduct["id"],
    public name: IProduct["name"],
  ) {}

  // Можете добавить методы для выполнения бизнес-логики, относящейся к продуктам, если это нужно
}
