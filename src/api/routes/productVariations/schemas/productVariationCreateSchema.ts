import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { productVariationUpdateSchema } from "./productVariationUpdateSchema.js";

export const productVariationCreateSchema = {
  $id: "ProductVariationCreate",
  type: "object",
  $ref: "ProductVariationUpdate",
  required: ["quantity", "productId", "variationTypeId"],
} as const satisfies JSONSchema;

export type IProductVariationCreateSchema = RemoveIndex<
  FromSchema<
    typeof productVariationCreateSchema,
    { references: [typeof productVariationUpdateSchema] }
  >
>;
