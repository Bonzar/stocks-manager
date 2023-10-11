import { Product } from "../../domain/models/Product.js";
import type { IProductRepository } from "../../domain/interfaces/IProductRepository.js";
import type {
  Prisma as P,
  PrismaClient,
  Product as IProduct,
} from "@prisma/client";

export class ProductRepository implements IProductRepository {
  constructor(private prisma: PrismaClient) {}

  async getAll(): Promise<Product[]> {
    const productsDto = await this.prisma.product.findMany();
    return productsDto.map(this.toDomainModel);
  }

  async getOneById(id: number): Promise<Product> {
    const productDto = await this.prisma.product.findUniqueOrThrow({
      where: { id },
    });

    return this.toDomainModel(productDto);
  }

  async create(data: P.ProductCreateInput): Promise<Product> {
    const productDto = await this.prisma.product.create({ data });

    return this.toDomainModel(productDto);
  }

  async updateOneById(
    id: number,
    data: P.ProductUpdateInput,
  ): Promise<Product> {
    const productDto = await this.prisma.product.update({
      where: { id },
      data,
    });

    return this.toDomainModel(productDto);
  }

  async deleteOneById(id: number): Promise<Product> {
    const productDto = await this.prisma.product.delete({ where: { id } });

    return this.toDomainModel(productDto);
  }

  private toDomainModel(productDto: IProduct): Product {
    return new Product(productDto.id, productDto.name);
  }
}
