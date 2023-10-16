import { IBaseCRUDService } from "./base/IBaseCRUDService.js";
import { Marketplace } from "@prisma/client";
import { ICreateMarketplace, IMarketplace } from "../../models/Marketplace.js";

export interface IMarketplaceService
  extends IBaseCRUDService<Marketplace, IMarketplace, ICreateMarketplace> {}
