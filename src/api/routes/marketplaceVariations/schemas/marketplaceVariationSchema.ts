import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { marketplaceVariationUpdateSchema } from "./marketplaceVariationUpdateSchema.js";
import { marketplaceVariationCreateSchema } from "./marketplaceVariationCreateSchema.js";
import { idObjSchema } from "../../../schemas/idSchema.js";

export const marketplaceVariationSchema = {
  $id: "MarketplaceVariation",
  type: "object",
  allOf: [idObjSchema, { $ref: "MarketplaceVariationCreate" }],
} as const satisfies JSONSchema;

export type IMarketplaceVariationSchema = RemoveIndex<
  FromSchema<
    typeof marketplaceVariationSchema,
    {
      references: [
        typeof marketplaceVariationUpdateSchema,
        typeof marketplaceVariationCreateSchema,
      ];
    }
  >
>;
