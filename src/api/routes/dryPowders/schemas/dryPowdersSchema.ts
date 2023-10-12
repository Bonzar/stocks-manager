import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { dryPowderSchema } from "./dryPowderSchema.js";
import { dryPowderCreateSchema } from "./dryPowderCreateSchema.js";

export const dryPowdersSchema = {
  $id: "DryPowders",
  type: "array",
  items: {
    $ref: "DryPowder",
  },
} as const satisfies JSONSchema;

export type IDryPowdersSchema = RemoveIndex<
  FromSchema<
    typeof dryPowdersSchema,
    {
      references: [typeof dryPowderSchema, typeof dryPowderCreateSchema];
    }
  >
>;
