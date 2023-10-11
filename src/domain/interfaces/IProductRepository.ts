import { CreateProductInput, Product } from "../models/Product.js";
import { IBaseCRUDRepository } from "./IBaseCRUDRepository.js";

export interface IProductRepository
  extends IBaseCRUDRepository<Product, CreateProductInput> {}
