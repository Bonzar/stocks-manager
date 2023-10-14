import { IValidator } from "./IValidator.js";
import {
  ICreateVariationVolume,
  IVariationVolume,
} from "../../models/VariationVolume.js";

export type IVariationVolumeValidator = IValidator<
  IVariationVolume,
  ICreateVariationVolume
>;
