import fp from "fastify-plugin";
import { variationSetSchema } from "./variationSetSchema.js";
import { variationSetsSchema } from "./variationSetsSchema.js";
import { variationSetUpdateSchema } from "./variationSetUpdateSchema.js";
import { variationSetCreateSchema } from "./variationSetCreateSchema.js";

export default fp(async (fastify) => {
  fastify.addSchema(variationSetSchema);
  fastify.addSchema(variationSetsSchema);
  fastify.addSchema(variationSetCreateSchema);
  fastify.addSchema(variationSetUpdateSchema);
});
