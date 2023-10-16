import { Marketplace as PrismaMarketplace, Prisma } from "@prisma/client";

export interface IMarketplace extends PrismaMarketplace {}

export interface ICreateMarketplace
  extends Prisma.MarketplaceUncheckedCreateInput {}

export class Marketplace implements IMarketplace {
  coefficient: IMarketplace["coefficient"];
  haveWarehouse: IMarketplace["haveWarehouse"];
  id: IMarketplace["id"];
  name: IMarketplace["name"];

  constructor({ id, haveWarehouse, name, coefficient }: IMarketplace) {
    this.id = id;
    this.haveWarehouse = haveWarehouse;
    this.name = name;
    this.coefficient = coefficient;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
