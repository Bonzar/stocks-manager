import {
  MarketplaceVariation as PrismaMarketplaceVariation,
  Prisma,
} from "@prisma/client";

export interface IMarketplaceVariation extends PrismaMarketplaceVariation {}

export interface ICreteMarketplaceVariation
  extends Prisma.MarketplaceVariationUncheckedCreateInput {}

export class MarketplaceVariation implements IMarketplaceVariation {
  id: IMarketplaceVariation["id"];
  externalId: IMarketplaceVariation["externalId"];
  isActive: IMarketplaceVariation["isActive"];
  marketplaceId: IMarketplaceVariation["marketplaceId"];
  productVariationId: IMarketplaceVariation["productVariationId"];
  quantityOnMarketplace: IMarketplaceVariation["quantityOnMarketplace"];

  constructor({
    id,
    externalId,
    isActive,
    marketplaceId,
    productVariationId,
    quantityOnMarketplace,
  }: IMarketplaceVariation) {
    this.id = id;
    this.externalId = externalId;
    this.isActive = isActive;
    this.marketplaceId = marketplaceId;
    this.productVariationId = productVariationId;
    this.quantityOnMarketplace = quantityOnMarketplace;
  }
}
