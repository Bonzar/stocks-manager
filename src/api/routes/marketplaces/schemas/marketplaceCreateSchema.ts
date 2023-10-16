import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { marketplaceUpdateSchema } from "./marketplaceUpdateSchema.js";

export const marketplaceCreateSchema = {
  $id: "MarketplaceCreate",
  type: "object",
  $ref: "MarketplaceUpdate",
  required: ["name", "coefficient", "haveWarehouse"],
} as const satisfies JSONSchema;

export type IMarketplaceCreateSchema = RemoveIndex<
  FromSchema<
    typeof marketplaceCreateSchema,
    { references: [typeof marketplaceUpdateSchema] }
  >
>;
