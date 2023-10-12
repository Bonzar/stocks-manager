import { FromSchema, JSONSchema } from "json-schema-to-ts";

export const productUpdateSchema = {
  $id: "ProductUpdate",
  type: "object",
  properties: {
    name: { type: "string" },
  },
} as const satisfies JSONSchema;

export type IProductUpdateSchema = RemoveIndex<
  FromSchema<typeof productUpdateSchema>
>;
