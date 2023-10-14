import { FromSchema, JSONSchema } from "json-schema-to-ts";
import { variationVolumeCreateSchema } from "./variationVolumeCreateSchema.js";
import { variationVolumeUpdateSchema } from "./variationVolumeUpdateSchema.js";
import { idObjSchema } from "../../../schemas/idSchema.js";

export const variationVolumeSchema = {
  $id: "VariationVolume",
  type: "object",
  allOf: [idObjSchema, { $ref: "VariationVolumeCreate" }],
} as const satisfies JSONSchema;

export type IVariationVolumeSchema = RemoveIndex<
  FromSchema<
    typeof variationVolumeSchema,
    {
      references: [
        typeof variationVolumeCreateSchema,
        typeof variationVolumeUpdateSchema,
      ];
    }
  >
>;
