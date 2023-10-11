import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idSchema } from "../../../schemas/idSchema.js";
import { productCreateSchema } from "./productCreateSchema.js";

export const productSchema = {
  $id: "Product",
  type: "object",
  allOf: [
    { properties: { id: idSchema }, required: ["id"] },
    { $ref: "ProductCreate" },
  ],
} as const satisfies JSONSchema;

export type IProductSchema = RemoveIndex<
  FromSchema<
    typeof productSchema,
    {
      references: [typeof productCreateSchema];
    }
  >
>;
