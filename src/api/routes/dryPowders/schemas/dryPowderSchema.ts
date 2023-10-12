import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { dryPowderCreateSchema } from "./dryPowderCreateSchema.js";

export const dryPowderSchema = {
  $id: "DryPowder",
  type: "object",
  allOf: [idObjSchema, { $ref: "DryPowderCreate" }],
} as const satisfies JSONSchema;

export type IDryPowderSchema = RemoveIndex<
  FromSchema<
    typeof dryPowderSchema,
    { references: [typeof dryPowderCreateSchema] }
  >
>;
