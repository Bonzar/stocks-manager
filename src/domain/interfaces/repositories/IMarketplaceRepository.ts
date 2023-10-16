import { IBaseCRUDRepository } from "./base/IBaseCRUDRepository.js";
import { Prisma } from "@prisma/client";
import { IMarketplace } from "../../models/Marketplace.js";

export interface IMarketplaceRepository
  extends IBaseCRUDRepository<
    IMarketplace,
    Prisma.MarketplaceCreateInput,
    Prisma.MarketplaceUpdateInput
  > {}
