import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { variationSetUpdateSchema } from "./variationSetUpdateSchema.js";

export const variationSetCreateSchema = {
  $id: "VariationSetCreate",
  type: "object",
  $ref: "VariationSetUpdate",
  required: ["parentVariationId", "componentVariationId"],
} as const satisfies JSONSchema;

export type IVariationSetCreateSchema = RemoveIndex<
  FromSchema<
    typeof variationSetCreateSchema,
    { references: [typeof variationSetUpdateSchema] }
  >
>;
