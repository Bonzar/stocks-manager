import type { FromSchema, JSONSchema } from "json-schema-to-ts";

export const idSchema = { type: "number" } as const satisfies JSONSchema;

export const idObjSchema = {
  type: "object",
  properties: { id: idSchema },
  required: ["id"],
} as const satisfies JSONSchema;

export type IIdObjSchema = RemoveIndex<FromSchema<typeof idObjSchema>>;
