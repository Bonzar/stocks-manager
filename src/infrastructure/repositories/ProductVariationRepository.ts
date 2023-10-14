import { Prisma } from "@prisma/client";
import { IProductVariation } from "../../domain/models/ProductVariation.js";
import { BaseCRUDRepository } from "./base/BaseCRUDRepository.js";
import { IProductVariationRepository } from "../../domain/interfaces/repositories/IProductVariationRepository.js";

export class ProductVariationRepository
  extends BaseCRUDRepository<
    IProductVariation,
    Prisma.ProductVariationCreateInput,
    Prisma.ProductVariationUpdateInput
  >
  implements IProductVariationRepository
{
  protected prismaModel = this.prisma.productVariation;
}
