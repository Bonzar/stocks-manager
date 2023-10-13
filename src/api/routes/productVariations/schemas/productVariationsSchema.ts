import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { productVariationCreateSchema } from "./productVariationCreateSchema.js";
import { productVariationUpdateSchema } from "./productVariationUpdateSchema.js";
import { idObjSchema } from "../../../schemas/idSchema.js";

export const productVariationsSchema = {
  $id: "ProductVariations",
  type: "array",
  items: {
    allOf: [idObjSchema, { $ref: "ProductVariationCreate" }],
  },
} as const satisfies JSONSchema;

export type IProductVariationsSchema = RemoveIndex<
  FromSchema<
    typeof productVariationsSchema,
    {
      references: [
        typeof productVariationCreateSchema,
        typeof productVariationUpdateSchema,
      ];
    }
  >
>;
