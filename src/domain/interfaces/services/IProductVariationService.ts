import { IBaseCRUDService } from "./IBaseCRUDService.js";
import { Prisma, ProductVariation } from "@prisma/client";

export interface IProductVariationService
  extends IBaseCRUDService<
    ProductVariation,
    Prisma.ProductVariationCreateInput,
    Prisma.ProductVariationUpdateInput
  > {}
