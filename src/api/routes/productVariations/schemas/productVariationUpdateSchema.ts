import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idSchema } from "../../../schemas/idSchema.js";

export const productVariationUpdateSchema = {
  $id: "ProductVariationUpdate",
  type: "object",
  properties: {
    quantity: { type: "number" },
    description: { type: "string", nullable: true },
    productId: idSchema,
    variationTypeId: idSchema,
    variationVolumeId: { ...idSchema, nullable: true },
  },
} as const satisfies JSONSchema;

export type IProductVariationUpdateSchema = RemoveIndex<
  FromSchema<typeof productVariationUpdateSchema>
>;
