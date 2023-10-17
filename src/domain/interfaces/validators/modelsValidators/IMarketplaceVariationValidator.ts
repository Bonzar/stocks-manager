import { IBaseModelValidator } from "./base/IBaseModelValidator.js";
import {
  ICreteMarketplaceVariation,
  IMarketplaceVariation,
} from "../../../models/MarketplaceVariation.js";

export type IMarketplaceVariationValidator = IBaseModelValidator<
  IMarketplaceVariation,
  ICreteMarketplaceVariation
>;
