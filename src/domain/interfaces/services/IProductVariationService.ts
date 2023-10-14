import { IBaseCRUDService } from "./IBaseCRUDService.js";
import {
  ICreateProductVariation,
  IProductVariation,
  ProductVariation,
} from "../../models/ProductVariation.js";

export interface IProductVariationService
  extends IBaseCRUDService<
    ProductVariation,
    IProductVariation,
    ICreateProductVariation
  > {}
