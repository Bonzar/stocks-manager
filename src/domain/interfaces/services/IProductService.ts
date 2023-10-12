import { Prisma } from "@prisma/client";
import { Product } from "../../models/Product.js";
import { IBaseCRUDService } from "./IBaseCRUDService.js";

export interface IProductService
  extends IBaseCRUDService<
    Product,
    Prisma.ProductCreateInput,
    Prisma.ProductUpdateInput
  > {}
