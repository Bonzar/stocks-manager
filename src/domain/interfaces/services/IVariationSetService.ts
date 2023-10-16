import { IBaseCRUDService } from "./base/IBaseCRUDService.js";
import {
  ICreateVariationSet,
  IVariationSet,
  VariationSet,
} from "../../models/VariationSet.js";

export type IVariationSetService = IBaseCRUDService<
  VariationSet,
  IVariationSet,
  ICreateVariationSet
>;
