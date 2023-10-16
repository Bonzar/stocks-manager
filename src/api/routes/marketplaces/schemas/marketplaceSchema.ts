import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { marketplaceUpdateSchema } from "./marketplaceUpdateSchema.js";
import { marketplaceCreateSchema } from "./marketplaceCreateSchema.js";

export const marketplaceSchema = {
  $id: "Marketplace",
  type: "object",
  allOf: [idObjSchema, { $ref: "MarketplaceCreate" }],
} as const satisfies JSONSchema;

export type IMarketplaceSchema = RemoveIndex<
  FromSchema<
    typeof marketplaceSchema,
    {
      references: [
        typeof marketplaceUpdateSchema,
        typeof marketplaceCreateSchema,
      ];
    }
  >
>;
