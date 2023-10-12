import { IBaseCRUDRepository } from "./IBaseCRUDRepository.js";
import { Product } from "../../models/Product.js";
import { Prisma } from "@prisma/client";

export interface IProductRepository
  extends IBaseCRUDRepository<
    Product,
    Prisma.ProductCreateInput,
    Prisma.ProductUpdateInput
  > {}
