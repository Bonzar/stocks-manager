import { IProduct } from "../../domain/models/Product.js";
import { IProductRepository } from "../../domain/interfaces/repositories/IProductRepository.js";
import type { Prisma, PrismaClient } from "@prisma/client";

export class ProductRepository implements IProductRepository {
  constructor(private prisma: PrismaClient) {}

  public getAll(): Promise<IProduct[]> {
    return this.prisma.product.findMany();
  }

  public getOneById(id: number): Promise<IProduct> {
    return this.prisma.product.findUniqueOrThrow({
      where: { id },
    });
  }

  public create(data: Prisma.ProductCreateInput): Promise<IProduct> {
    return this.prisma.product.create({ data });
  }

  public updateOneById(
    id: number,
    data: Prisma.ProductUpdateInput,
  ): Promise<IProduct> {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  public deleteOneById(id: number): Promise<IProduct> {
    return this.prisma.product.delete({ where: { id } });
  }
}
