import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { dryPowderCreateSchema } from "./dryPowderCreateSchema.js";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { dryPowderUpdateSchema } from "./dryPowderUpdateSchema.js";

export const dryPowdersSchema = {
  $id: "DryPowders",
  type: "array",
  items: {
    allOf: [idObjSchema, { $ref: "DryPowderCreate" }],
  },
} as const satisfies JSONSchema;

export type IDryPowdersSchema = RemoveIndex<
  FromSchema<
    typeof dryPowdersSchema,
    {
      references: [typeof dryPowderCreateSchema, typeof dryPowderUpdateSchema];
    }
  >
>;
