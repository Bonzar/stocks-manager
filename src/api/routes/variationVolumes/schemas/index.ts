import fp from "fastify-plugin";
import { variationVolumesSchema } from "./variationVolumesSchema.js";
import { variationVolumeUpdateSchema } from "./variationVolumeUpdateSchema.js";
import { variationVolumeSchema } from "./variationVolumeSchema.js";
import { variationVolumeCreateSchema } from "./variationVolumeCreateSchema.js";

export default fp(async (fastify, opts) => {
  fastify.addSchema(variationVolumeSchema);
  fastify.addSchema(variationVolumesSchema);
  fastify.addSchema(variationVolumeCreateSchema);
  fastify.addSchema(variationVolumeUpdateSchema);
});
