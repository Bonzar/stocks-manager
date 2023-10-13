import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { productCreateSchema } from "./productCreateSchema.js";
import { productUpdateSchema } from "./productUpdateSchema.js";
import { idObjSchema } from "../../../schemas/idSchema.js";

export const productsSchema = {
  $id: "Products",
  type: "array",
  items: {
    allOf: [idObjSchema, { $ref: "ProductCreate" }],
  },
} as const satisfies JSONSchema;

export type IProductsSchema = RemoveIndex<
  FromSchema<
    typeof productsSchema,
    {
      references: [typeof productUpdateSchema, typeof productCreateSchema];
    }
  >
>;
