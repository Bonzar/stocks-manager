import fp from "fastify-plugin";
import { marketplaceVariationCreateSchema } from "./marketplaceVariationCreateSchema.js";
import { marketplaceVariationUpdateSchema } from "./marketplaceVariationUpdateSchema.js";
import { marketplaceVariationsSchema } from "./marketplaceVariationsSchema.js";
import { marketplaceVariationSchema } from "./marketplaceVariationSchema.js";

export default fp(async (fastify) => {
  fastify.addSchema(marketplaceVariationSchema);
  fastify.addSchema(marketplaceVariationsSchema);
  fastify.addSchema(marketplaceVariationCreateSchema);
  fastify.addSchema(marketplaceVariationUpdateSchema);
});
