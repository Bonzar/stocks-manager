import { ProductVariation as IProductVariation } from "@prisma/client";

export class ProductVariation implements IProductVariation {
  constructor(
    public id: IProductVariation["id"],
    public quantity: IProductVariation["quantity"],
    public description: IProductVariation["description"],
    public productId: IProductVariation["productId"],
    public variationType: IProductVariation["variationType"],
    public variationVolumeId: IProductVariation["variationVolumeId"],
  ) {}

  // Methods for business-logic and validation
}
