import type { Prisma } from "@prisma/client";
import type { IProduct } from "../../domain/models/Product.js";
import type { IProductRepository } from "../../domain/interfaces/repositories/IProductRepository.js";
import { BaseCRUDRepository } from "./base/BaseCRUDRepository.js";

export class ProductRepository
  extends BaseCRUDRepository<
    IProduct,
    Prisma.ProductCreateInput,
    Prisma.ProductUpdateInput
  >
  implements IProductRepository
{
  protected prismaModel = this.prisma.product;
}
