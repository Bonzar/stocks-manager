import { IBaseCRUDService } from "./IBaseCRUDService.js";
import {
  DryPowder,
  ICreateDryPowder,
  IDryPowder,
} from "../../models/DryPowder.js";

export interface IDryPowderService
  extends IBaseCRUDService<DryPowder, IDryPowder, ICreateDryPowder> {}
