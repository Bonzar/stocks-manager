import { IBaseCRUDService } from "./base/IBaseCRUDService.js";
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
