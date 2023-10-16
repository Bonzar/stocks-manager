import { ICreateDryPowder, IDryPowder } from "../../../models/DryPowder.js";
import { IBaseModelValidator } from "./base/IBaseModelValidator.js";

export type IDryPowderValidator = IBaseModelValidator<
  IDryPowder,
  ICreateDryPowder
>;
