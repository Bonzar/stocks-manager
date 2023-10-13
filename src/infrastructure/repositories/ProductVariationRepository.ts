import { IProductVariationRepository } from "../../domain/interfaces/repositories/IProductVariationRepository.js";
import {
  Prisma,
  PrismaClient,
  ProductVariation as PrismaProductVariation,
} from "@prisma/client";
import { ProductVariation } from "../../domain/models/ProductVariation.js";

export class ProductVariationRepository implements IProductVariationRepository {
  constructor(private prisma: PrismaClient) {}

  async create(
    data: Prisma.ProductVariationCreateInput,
  ): Promise<ProductVariation> {
    const productVariationDto = await this.prisma.productVariation.create({
      data,
    });

    return this.toDomainModel(productVariationDto);
  }

  async deleteOneById(id: IdType): Promise<ProductVariation> {
    const productVariationDto = await this.prisma.productVariation.delete({
      where: { id },
    });

    return this.toDomainModel(productVariationDto);
  }

  async getAll(): Promise<ProductVariation[]> {
    const productVariationsDto = await this.prisma.productVariation.findMany();

    return productVariationsDto.map(this.toDomainModel);
  }

  async getOneById(id: IdType): Promise<ProductVariation> {
    const productVariationDto =
      await this.prisma.productVariation.findUniqueOrThrow({
        where: { id },
      });

    return this.toDomainModel(productVariationDto);
  }

  async updateOneById(
    id: IdType,
    data: Prisma.ProductVariationUpdateInput,
  ): Promise<ProductVariation> {
    const productVariationDto = await this.prisma.productVariation.update({
      where: { id },
      data,
    });

    return this.toDomainModel(productVariationDto);
  }

  toDomainModel(productVariationDto: PrismaProductVariation): ProductVariation {
    const {
      id,
      productId,
      variationVolumeId,
      quantity,
      variationTypeId,
      description,
    } = productVariationDto;

    return new ProductVariation(
      id,
      quantity,
      description,
      productId,
      variationTypeId,
      variationVolumeId,
    );
  }
}
