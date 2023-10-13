import { IProductVariationService } from "../domain/interfaces/services/IProductVariationService.js";
import { Prisma } from "@prisma/client";
import { ProductVariation } from "../domain/models/ProductVariation.js";
import { IProductVariationRepository } from "../domain/interfaces/repositories/IProductVariationRepository.js";

export class ProductVariationService implements IProductVariationService {
  constructor(
    private productVariationRepository: IProductVariationRepository,
  ) {}

  create(data: Prisma.ProductVariationCreateInput): Promise<ProductVariation> {
    return this.productVariationRepository.create(data);
  }

  deleteOneById(id: IdType): Promise<ProductVariation> {
    return this.productVariationRepository.deleteOneById(id);
  }

  getAll(): Promise<ProductVariation[]> {
    return this.productVariationRepository.getAll();
  }

  getOneById(id: IdType): Promise<ProductVariation> {
    return this.productVariationRepository.getOneById(id);
  }

  updateOneById(
    id: IdType,
    data: Prisma.ProductVariationUpdateInput,
  ): Promise<ProductVariation> {
    return this.productVariationRepository.updateOneById(id, data);
  }
}
