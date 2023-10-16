import fp from "fastify-plugin";
import { marketplaceSchema } from "./marketplaceSchema.js";
import { marketplaceCreateSchema } from "./marketplaceCreateSchema.js";
import { marketplacesSchema } from "./marketplacesSchema.js";
import { marketplaceUpdateSchema } from "./marketplaceUpdateSchema.js";

export default fp(async (fastify, opts) => {
  fastify.addSchema(marketplaceSchema);
  fastify.addSchema(marketplaceCreateSchema);
  fastify.addSchema(marketplacesSchema);
  fastify.addSchema(marketplaceUpdateSchema);
});
