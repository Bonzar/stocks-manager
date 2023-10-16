import {
  ICreateProductVariation,
  IProductVariation,
} from "../../../models/ProductVariation.js";
import { IBaseModelValidator } from "./base/IBaseModelValidator.js";

export type IProductVariationValidator = IBaseModelValidator<
  IProductVariation,
  ICreateProductVariation
>;
