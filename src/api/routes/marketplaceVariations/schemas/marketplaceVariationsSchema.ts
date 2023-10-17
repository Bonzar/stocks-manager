import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { marketplaceVariationCreateSchema } from "./marketplaceVariationCreateSchema.js";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { marketplaceVariationUpdateSchema } from "./marketplaceVariationUpdateSchema.js";

export const marketplaceVariationsSchema = {
  $id: "MarketplaceVariations",
  type: "array",
  items: {
    allOf: [idObjSchema, { $ref: "MarketplaceVariationCreate" }],
  },
} as const satisfies JSONSchema;

export type IMarketplaceVariationsSchema = RemoveIndex<
  FromSchema<
    typeof marketplaceVariationsSchema,
    {
      references: [
        typeof marketplaceVariationUpdateSchema,
        typeof marketplaceVariationCreateSchema,
      ];
    }
  >
>;
