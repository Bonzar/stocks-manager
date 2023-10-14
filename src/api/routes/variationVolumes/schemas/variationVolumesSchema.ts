import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { idObjSchema } from "../../../schemas/idSchema.js";
import { variationVolumeUpdateSchema } from "./variationVolumeUpdateSchema.js";
import { variationVolumeCreateSchema } from "./variationVolumeCreateSchema.js";

export const variationVolumesSchema = {
  $id: "VariationVolumes",
  type: "array",
  items: {
    allOf: [idObjSchema, { $ref: "VariationVolumeCreate" }],
  },
} as const satisfies JSONSchema;

export type IVariationVolumesSchema = RemoveIndex<
  FromSchema<
    typeof variationVolumesSchema,
    {
      references: [
        typeof variationVolumeCreateSchema,
        typeof variationVolumeUpdateSchema,
      ];
    }
  >
>;
