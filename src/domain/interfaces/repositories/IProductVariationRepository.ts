import { Prisma } from "@prisma/client";
import { ProductVariation } from "../../models/ProductVariation.js";
import { IBaseCRUDRepository } from "./IBaseCRUDRepository.js";

export interface IProductVariationRepository
  extends IBaseCRUDRepository<
    ProductVariation,
    Prisma.ProductVariationCreateInput,
    Prisma.ProductVariationUpdateInput
  > {}
