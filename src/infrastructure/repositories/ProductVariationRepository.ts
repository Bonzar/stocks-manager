import { IProductVariationRepository } from "../../domain/interfaces/repositories/IProductVariationRepository.js";
import { Prisma, PrismaClient } from "@prisma/client";
import { IProductVariation } from "../../domain/models/ProductVariation.js";

export class ProductVariationRepository implements IProductVariationRepository {
  constructor(private prisma: PrismaClient) {}

  public getAll(): Promise<IProductVariation[]> {
    return this.prisma.productVariation.findMany();
  }

  public getOneById(id: IdType): Promise<IProductVariation> {
    return this.prisma.productVariation.findUniqueOrThrow({
      where: { id },
    });
  }

  public create(
    data: Prisma.ProductVariationCreateInput,
  ): Promise<IProductVariation> {
    return this.prisma.productVariation.create({
      data,
    });
  }

  public updateOneById(
    id: IdType,
    data: Prisma.ProductVariationUpdateInput,
  ): Promise<IProductVariation> {
    return this.prisma.productVariation.update({
      where: { id },
      data,
    });
  }

  public deleteOneById(id: IdType): Promise<IProductVariation> {
    return this.prisma.productVariation.delete({
      where: { id },
    });
  }
}
