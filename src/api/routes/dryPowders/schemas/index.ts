import fp from "fastify-plugin";
import { dryPowderSchema } from "./dryPowderSchema.js";
import { dryPowderCreateSchema } from "./dryPowderCreateSchema.js";
import { dryPowdersSchema } from "./dryPowdersSchema.js";

export default fp(async (fastify, opts) => {
  fastify.addSchema(dryPowderCreateSchema);
  fastify.addSchema(dryPowderSchema);
  fastify.addSchema(dryPowdersSchema);
});
