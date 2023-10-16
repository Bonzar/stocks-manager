import { BaseCRUDRepository } from "./base/BaseCRUDRepository.js";
import { IMarketplace } from "../../domain/models/Marketplace.js";
import { Prisma } from "@prisma/client";
import { IMarketplaceRepository } from "../../domain/interfaces/repositories/IMarketplaceRepository.js";

export class MarketplaceRepository
  extends BaseCRUDRepository<
    IMarketplace,
    Prisma.MarketplaceCreateInput,
    Prisma.MarketplaceUpdateInput
  >
  implements IMarketplaceRepository
{
  protected prismaModel = this.prisma.marketplace;
}
