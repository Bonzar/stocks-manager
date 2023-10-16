import type {
  Prisma,
  ProductVariation as PrismaProductVariation,
} from "@prisma/client";

export interface IProductVariation extends PrismaProductVariation {}

export interface ICreateProductVariation
  extends Prisma.ProductVariationUncheckedCreateInput {}

export class ProductVariation implements IProductVariation {
  public id: IProductVariation["id"];
  public quantity: IProductVariation["quantity"];
  public productId: IProductVariation["productId"];
  public variationType: IProductVariation["variationType"];
  public variationVolumeId: IProductVariation["variationVolumeId"];
  public description: IProductVariation["description"];

  constructor(data: IProductVariation) {
    this.id = data.id;
    this.description = data.description;
    this.quantity = data.quantity;
    this.productId = data.productId;
    this.variationType = data.variationType;
    this.variationVolumeId = data.variationVolumeId;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
