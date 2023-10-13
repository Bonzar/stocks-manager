import fp from "fastify-plugin";
import { dryPowderSchema } from "./dryPowderSchema.js";
import { dryPowderCreateSchema } from "./dryPowderCreateSchema.js";
import { dryPowdersSchema } from "./dryPowdersSchema.js";
import { dryPowderUpdateSchema } from "./dryPowderUpdateSchema.js";

export default fp(async (fastify, opts) => {
  fastify.addSchema(dryPowderSchema);
  fastify.addSchema(dryPowdersSchema);
  fastify.addSchema(dryPowderCreateSchema);
  fastify.addSchema(dryPowderUpdateSchema);
});
