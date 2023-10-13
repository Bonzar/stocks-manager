import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { productVariationCreateSchema } from "./productVariationCreateSchema.js";
import { productVariationUpdateSchema } from "./productVariationUpdateSchema.js";

export const productVariationSchema = {
  $id: "ProductVariation",
  type: "object",
  allOf: [idObjSchema, { $ref: "ProductVariationCreate" }],
} as const satisfies JSONSchema;

export type IProductVariationSchema = RemoveIndex<
  FromSchema<
    typeof productVariationSchema,
    {
      references: [
        typeof productVariationCreateSchema,
        typeof productVariationUpdateSchema,
      ];
    }
  >
>;
