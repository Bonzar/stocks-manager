import { IValidator } from "./IValidator.js";
import { ICreateProduct, IProduct } from "../../models/Product.js";

export type IProductValidator = IValidator<IProduct, ICreateProduct>;
