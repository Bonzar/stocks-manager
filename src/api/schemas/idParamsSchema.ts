import { FromSchema, JSONSchema } from "json-schema-to-ts";

export const idParamsSchema = {
  type: "object",
  properties: {
    id: { type: "number" },
  },
  additionalProperties: false,
  required: ["id"],
} as const satisfies JSONSchema;

export type IIdParamsSchema = FromSchema<typeof idParamsSchema>;
