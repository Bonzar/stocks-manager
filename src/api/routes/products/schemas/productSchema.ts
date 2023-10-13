import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { productCreateSchema } from "./productCreateSchema.js";
import { productUpdateSchema } from "./productUpdateSchema.js";

export const productSchema = {
  $id: "Product",
  type: "object",
  allOf: [idObjSchema, { $ref: "ProductCreate" }],
} as const satisfies JSONSchema;

export type IProductSchema = RemoveIndex<
  FromSchema<
    typeof productSchema,
    {
      references: [typeof productCreateSchema, typeof productUpdateSchema];
    }
  >
>;
