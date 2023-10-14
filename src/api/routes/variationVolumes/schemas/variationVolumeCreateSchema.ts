import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { variationVolumeUpdateSchema } from "./variationVolumeUpdateSchema.js";

export const variationVolumeCreateSchema = {
  $id: "VariationVolumeCreate",
  type: "object",
  $ref: "VariationVolumeUpdate",
  required: ["name", "minCount", "priority", "dryCoefficient"],
} as const satisfies JSONSchema;

export type IVariationVolumeCreateSchema = RemoveIndex<
  FromSchema<
    typeof variationVolumeCreateSchema,
    {
      references: [typeof variationVolumeUpdateSchema];
    }
  >
>;
