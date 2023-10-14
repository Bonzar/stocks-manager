import { Prisma } from "@prisma/client";
import { IProductVariation } from "../../models/ProductVariation.js";
import { IBaseCRUDRepository } from "./IBaseCRUDRepository.js";

export interface IProductVariationRepository
  extends IBaseCRUDRepository<
    IProductVariation,
    Prisma.ProductVariationCreateInput,
    Prisma.ProductVariationUpdateInput
  > {}
