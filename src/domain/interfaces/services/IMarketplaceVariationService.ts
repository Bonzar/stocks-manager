import { IBaseCRUDService } from "./base/IBaseCRUDService.js";
import {
  ICreteMarketplaceVariation,
  IMarketplaceVariation,
  MarketplaceVariation,
} from "../../models/MarketplaceVariation.js";

export interface IMarketplaceVariationService
  extends IBaseCRUDService<
    MarketplaceVariation,
    IMarketplaceVariation,
    ICreteMarketplaceVariation
  > {}
