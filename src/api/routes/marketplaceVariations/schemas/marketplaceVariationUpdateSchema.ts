import { FromSchema, JSONSchema } from "json-schema-to-ts";

export const marketplaceVariationUpdateSchema = {
  $id: "MarketplaceVariationUpdate",
  type: "object",
  properties: {
    marketplaceId: { type: "number" },
    productVariationId: { type: "number" },
    externalId: { type: "string" },
    isActive: { type: "boolean" },
    quantityOnMarketplace: { type: "number", nullable: true },
  },
} as const satisfies JSONSchema;

export type IMarketplaceVariationUpdateSchema = RemoveIndex<
  FromSchema<typeof marketplaceVariationUpdateSchema>
>;
