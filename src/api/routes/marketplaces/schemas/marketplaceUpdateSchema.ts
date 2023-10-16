import { FromSchema, JSONSchema } from "json-schema-to-ts";

export const marketplaceUpdateSchema = {
  $id: "MarketplaceUpdate",
  type: "object",
  properties: {
    name: { type: "string" },
    coefficient: { type: "number" },
    haveWarehouse: { type: "boolean" },
  },
} as const satisfies JSONSchema;

export type IMarketplaceUpdateSchema = RemoveIndex<
  FromSchema<typeof marketplaceUpdateSchema>
>;
