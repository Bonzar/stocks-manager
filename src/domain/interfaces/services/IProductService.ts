import { ICreateProduct, IProduct, Product } from "../../models/Product.js";
import { IBaseCRUDService } from "./base/IBaseCRUDService.js";

export interface IProductService
  extends IBaseCRUDService<Product, IProduct, ICreateProduct> {}
