import { IProduct } from "../../../models/Product.js";
import { IBaseFieldsValidator } from "./base/IBaseFieldsValidator.js";

export type IProductFieldsValidator = IBaseFieldsValidator<IProduct>;
