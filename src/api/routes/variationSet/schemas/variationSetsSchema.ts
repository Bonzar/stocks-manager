import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { variationSetCreateSchema } from "./variationSetCreateSchema.js";
import { variationSetUpdateSchema } from "./variationSetUpdateSchema.js";

export const variationSetsSchema = {
  $id: "VariationSets",
  type: "array",
  items: {
    allOf: [idObjSchema, { $ref: "VariationSetCreate" }],
  },
} as const satisfies JSONSchema;

export type IVariationSetsSchema = RemoveIndex<
  FromSchema<
    typeof variationSetsSchema,
    {
      references: [
        typeof variationSetCreateSchema,
        typeof variationSetUpdateSchema,
      ];
    }
  >
>;
