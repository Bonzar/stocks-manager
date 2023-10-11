import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idSchema } from "./idSchema.js";

export const idParamsSchema = {
  type: "object",
  properties: { id: idSchema },
  required: ["id"],
} as const satisfies JSONSchema;

export type IIdParamsSchema = RemoveIndex<FromSchema<typeof idParamsSchema>>;
