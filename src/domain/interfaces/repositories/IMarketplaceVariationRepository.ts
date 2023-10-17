import { IBaseCRUDRepository } from "./base/IBaseCRUDRepository.js";
import { IMarketplaceVariation } from "../../models/MarketplaceVariation.js";
import { Prisma } from "@prisma/client";

export interface IMarketplaceVariationRepository
  extends IBaseCRUDRepository<
    IMarketplaceVariation,
    Prisma.MarketplaceVariationCreateInput,
    Prisma.MarketplaceVariationUpdateInput
  > {}
