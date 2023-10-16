import { IBaseModelValidator } from "./base/IBaseModelValidator.js";
import {
  ICreateMarketplace,
  IMarketplace,
} from "../../../models/Marketplace.js";

export type IMarketplaceValidator = IBaseModelValidator<
  IMarketplace,
  ICreateMarketplace
>;
