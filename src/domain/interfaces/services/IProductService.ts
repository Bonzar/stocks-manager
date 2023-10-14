import { ICreateProduct, IProduct, Product } from "../../models/Product.js";
import { IBaseCRUDService } from "./IBaseCRUDService.js";

export interface IProductService
  extends IBaseCRUDService<Product, IProduct, ICreateProduct> {}
