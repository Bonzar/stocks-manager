import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { productUpdateSchema } from "./productUpdateSchema.js";

export const productCreateSchema = {
  $id: "ProductCreate",
  type: "object",
  $ref: "ProductUpdate",
  required: ["name"],
} as const satisfies JSONSchema;

export type IProductCreateSchema = RemoveIndex<
  FromSchema<
    typeof productCreateSchema,
    { references: [typeof productUpdateSchema] }
  >
>;
