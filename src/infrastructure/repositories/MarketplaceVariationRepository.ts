import { BaseCRUDRepository } from "./base/BaseCRUDRepository.js";
import { IMarketplaceVariation } from "../../domain/models/MarketplaceVariation.js";
import { Prisma } from "@prisma/client";
import { IMarketplaceVariationRepository } from "../../domain/interfaces/repositories/IMarketplaceVariationRepository.js";

export class MarketplaceVariationRepository
  extends BaseCRUDRepository<
    IMarketplaceVariation,
    Prisma.MarketplaceVariationCreateInput,
    Prisma.MarketplaceVariationUpdateInput
  >
  implements IMarketplaceVariationRepository
{
  protected prismaModel = this.prisma.marketplaceVariation;
}
