import { ProductVariation as IProductVariation } from "@prisma/client";

export class ProductVariation implements IProductVariation {
  constructor(
    public id: IProductVariation["id"],
    public quantity: IProductVariation["quantity"],
    public description: IProductVariation["description"],
    public productId: IProductVariation["productId"],
    public variationTypeId: IProductVariation["variationTypeId"],
    public variationVolumeId: IProductVariation["variationVolumeId"],
  ) {}

  // Methods for business-logic and validation
}
