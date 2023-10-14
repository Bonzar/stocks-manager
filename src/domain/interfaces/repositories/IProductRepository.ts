import { IBaseCRUDRepository } from "./IBaseCRUDRepository.js";
import { IProduct } from "../../models/Product.js";
import { Prisma } from "@prisma/client";

export interface IProductRepository
  extends IBaseCRUDRepository<
    IProduct,
    Prisma.ProductCreateInput,
    Prisma.ProductUpdateInput
  > {}
