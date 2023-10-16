import {
  ICreateVariationVolume,
  IVariationVolume,
} from "../../../models/VariationVolume.js";
import { IBaseModelValidator } from "./base/IBaseModelValidator.js";

export type IVariationVolumeValidator = IBaseModelValidator<
  IVariationVolume,
  ICreateVariationVolume
>;
