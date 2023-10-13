import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { dryPowderUpdateSchema } from "./dryPowderUpdateSchema.js";

export const dryPowderCreateSchema = {
  $id: "DryPowderCreate",
  type: "object",
  $ref: "DryPowderUpdate",
  required: ["productId"],
} as const satisfies JSONSchema;

export type IDryPowderCreateSchema = RemoveIndex<
  FromSchema<
    typeof dryPowderCreateSchema,
    { references: [typeof dryPowderUpdateSchema] }
  >
>;
