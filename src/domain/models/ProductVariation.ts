import type {
  Prisma,
  ProductVariation as PrismaProductVariation,
} from "@prisma/client";
import { IProductVariationValidator } from "../interfaces/validators/modelsValidators/IProductVariationValidator.js";
import { ProductVariationValidator } from "./validators/modelValidators/ProductVariationValidator.js";

export interface IProductVariation extends PrismaProductVariation {}

export interface ICreateProductVariation
  extends Prisma.ProductVariationUncheckedCreateInput {}

export class ProductVariation implements IProductVariation {
  private productVariationValidator: IProductVariationValidator =
    new ProductVariationValidator();

  public id: IProductVariation["id"];
  public quantity: IProductVariation["quantity"];
  public productId: IProductVariation["productId"];
  public variationType: IProductVariation["variationType"];
  public variationVolumeId: IProductVariation["variationVolumeId"];
  public description: IProductVariation["description"];

  constructor(data: IProductVariation) {
    const validatedData = this.productVariationValidator.createValidator(data);

    this.id = this.productVariationValidator.idValidator(data.id);

    this.description = validatedData.description;
    this.quantity = validatedData.quantity;
    this.productId = validatedData.productId;
    this.variationType = validatedData.variationType;
    this.variationVolumeId = validatedData.variationVolumeId;
  }

  checkOnClassInstanceMethod() {}

  // Methods for business-logic
}
