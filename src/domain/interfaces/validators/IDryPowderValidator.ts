import { IValidator } from "./IValidator.js";
import { ICreateDryPowder, IDryPowder } from "../../models/DryPowder.js";

export type IDryPowderValidator = IValidator<IDryPowder, ICreateDryPowder>;
