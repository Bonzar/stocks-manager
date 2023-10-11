import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { productSchema } from "./productSchema.js";
import { productCreateSchema } from "./productCreateSchema.js";

export const productsSchema = {
  $id: "Products",
  type: "array",
  items: {
    $ref: "Product",
  },
} as const satisfies JSONSchema;

export type IProductsSchema = RemoveIndex<
  FromSchema<
    typeof productsSchema,
    {
      references: [typeof productSchema, typeof productCreateSchema];
    }
  >
>;
