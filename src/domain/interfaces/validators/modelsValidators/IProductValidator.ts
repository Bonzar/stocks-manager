import { ICreateProduct, IProduct } from "../../../models/Product.js";
import { IBaseModelValidator } from "./base/IBaseModelValidator.js";

export type IProductValidator = IBaseModelValidator<IProduct, ICreateProduct>;
