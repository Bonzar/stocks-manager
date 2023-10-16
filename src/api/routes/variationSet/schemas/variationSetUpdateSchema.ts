import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idSchema } from "../../../schemas/idSchema.js";

export const variationSetUpdateSchema = {
  $id: "VariationSetUpdate",
  type: "object",
  properties: {
    parentVariationId: idSchema,
    componentVariationId: idSchema,
  },
} as const satisfies JSONSchema;

export type IVariationSetUpdateSchema = RemoveIndex<
  FromSchema<typeof variationSetUpdateSchema>
>;
