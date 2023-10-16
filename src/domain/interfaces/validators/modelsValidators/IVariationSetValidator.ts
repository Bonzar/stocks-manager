import { IBaseModelValidator } from "./base/IBaseModelValidator.js";
import {
  ICreateVariationSet,
  IVariationSet,
} from "../../../models/VariationSet.js";

export type IVariationSetValidator = IBaseModelValidator<
  IVariationSet,
  ICreateVariationSet
>;
