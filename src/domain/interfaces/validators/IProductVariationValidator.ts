import { IValidator } from "./IValidator.js";
import {
  ICreateProductVariation,
  IProductVariation,
} from "../../models/ProductVariation.js";

export type IProductVariationValidator = IValidator<
  IProductVariation,
  ICreateProductVariation
>;
