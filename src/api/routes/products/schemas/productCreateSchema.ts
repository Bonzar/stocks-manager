import { FromSchema, JSONSchema } from "json-schema-to-ts";

export const productCreateSchema = {
  $id: "ProductCreate",
  type: "object",
  properties: {
    name: { type: "string" },
  },
  required: ["name"],
} as const satisfies JSONSchema;

export type IProductCreateSchema = RemoveIndex<
  FromSchema<typeof productCreateSchema>
>;
