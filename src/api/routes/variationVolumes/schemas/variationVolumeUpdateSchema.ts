import { FromSchema, JSONSchema } from "json-schema-to-ts";

export const variationVolumeUpdateSchema = {
  $id: "VariationVolumeUpdate",
  type: "object",
  properties: {
    name: { type: "string" },
    minCount: { type: "number" },
    priority: { type: "number" },
    dryCoefficient: { type: "number" },
  },
} as const satisfies JSONSchema;

export type IVariationVolumeUpdateSchema = RemoveIndex<
  FromSchema<typeof variationVolumeUpdateSchema>
>;
