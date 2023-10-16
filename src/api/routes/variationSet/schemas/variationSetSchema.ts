import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { variationSetCreateSchema } from "./variationSetCreateSchema.js";
import { variationSetUpdateSchema } from "./variationSetUpdateSchema.js";

export const variationSetSchema = {
  $id: "VariationSet",
  type: "object",
  allOf: [idObjSchema, { $ref: "VariationSetCreate" }],
} as const satisfies JSONSchema;

export type IVariationSetSchema = RemoveIndex<
  FromSchema<
    typeof variationSetSchema,
    {
      references: [
        typeof variationSetCreateSchema,
        typeof variationSetUpdateSchema,
      ];
    }
  >
>;
