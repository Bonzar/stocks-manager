import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idSchema } from "../../../schemas/idSchema.js";

export const dryPowderCreateSchema = {
  $id: "DryPowderCreate",
  type: "object",
  properties: {
    code: { type: "string", nullable: true },
    quantity: { type: "number" },
    productId: idSchema,
  },
  required: ["productId"],
} as const satisfies JSONSchema;

export type IDryPowderCreateSchema = RemoveIndex<
  FromSchema<typeof dryPowderCreateSchema>
>;
