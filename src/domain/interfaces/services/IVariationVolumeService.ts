import { IBaseCRUDService } from "./base/IBaseCRUDService.js";
import {
  ICreateVariationVolume,
  IVariationVolume,
  VariationVolume,
} from "../../models/VariationVolume.js";

export interface IVariationVolumeService
  extends IBaseCRUDService<
    VariationVolume,
    IVariationVolume,
    ICreateVariationVolume
  > {}
