import { Product } from "../../domain/models/Product.js";
import { IProductRepository } from "../../domain/interfaces/repositories/IProductRepository.js";
import type {
  Prisma,
  PrismaClient,
  Product as PrismaProduct,
} from "@prisma/client";

export class ProductRepository implements IProductRepository {
  constructor(private prisma: PrismaClient) {}

  public async getAll(): Promise<Product[]> {
    const productsDto = await this.prisma.product.findMany();
    return productsDto.map(this.toDomainModel);
  }

  public async getOneById(id: number): Promise<Product> {
    const productDto = await this.prisma.product.findUniqueOrThrow({
      where: { id },
    });

    return this.toDomainModel(productDto);
  }

  public async create(data: Prisma.ProductCreateInput): Promise<Product> {
    const productDto = await this.prisma.product.create({ data });

    return this.toDomainModel(productDto);
  }

  public async updateOneById(
    id: number,
    data: Prisma.ProductUpdateInput,
  ): Promise<Product> {
    const productDto = await this.prisma.product.update({
      where: { id },
      data,
    });

    return this.toDomainModel(productDto);
  }

  public async deleteOneById(id: number): Promise<Product> {
    const productDto = await this.prisma.product.delete({ where: { id } });

    return this.toDomainModel(productDto);
  }

  private toDomainModel(productDto: PrismaProduct): Product {
    return new Product(productDto.id, productDto.name);
  }
}
