import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idSchema } from "../../../schemas/idSchema.js";

export const dryPowderUpdateSchema = {
  $id: "DryPowderUpdate",
  type: "object",
  properties: {
    code: { type: "string", nullable: true },
    quantity: { type: "number" },
    productId: idSchema,
  },
} as const satisfies JSONSchema;

export type IDryPowderUpdateSchema = RemoveIndex<
  FromSchema<typeof dryPowderUpdateSchema>
>;
