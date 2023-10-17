import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { marketplaceVariationUpdateSchema } from "./marketplaceVariationUpdateSchema.js";

export const marketplaceVariationCreateSchema = {
  $id: "MarketplaceVariationCreate",
  type: "object",
  $ref: "MarketplaceVariationUpdate",
  required: ["productVariationId", "externalId", "marketplaceId"],
} as const satisfies JSONSchema;

export type IMarketplaceVariationCreateSchema = RemoveIndex<
  FromSchema<
    typeof marketplaceVariationCreateSchema,
    { references: [typeof marketplaceVariationUpdateSchema] }
  >
>;
