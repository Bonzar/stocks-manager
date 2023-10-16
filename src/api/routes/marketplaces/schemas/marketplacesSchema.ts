import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { marketplaceUpdateSchema } from "./marketplaceUpdateSchema.js";
import { marketplaceCreateSchema } from "./marketplaceCreateSchema.js";

export const marketplacesSchema = {
  $id: "Marketplaces",
  type: "array",
  items: {
    allOf: [idObjSchema, { $ref: "MarketplaceCreate" }],
  },
} as const satisfies JSONSchema;

export type IMarketplacesSchema = RemoveIndex<
  FromSchema<
    typeof marketplacesSchema,
    {
      references: [
        typeof marketplaceUpdateSchema,
        typeof marketplaceCreateSchema,
      ];
    }
  >
>;
