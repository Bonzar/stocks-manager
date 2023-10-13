import fp from "fastify-plugin";
import { productVariationUpdateSchema } from "./productVariationUpdateSchema.js";
import { productVariationCreateSchema } from "./productVariationCreateSchema.js";
import { productVariationSchema } from "./productVariationSchema.js";
import { productVariationsSchema } from "./productVariationsSchema.js";

export default fp(async (fastify, opts) => {
  fastify.addSchema(productVariationSchema);
  fastify.addSchema(productVariationsSchema);
  fastify.addSchema(productVariationCreateSchema);
  fastify.addSchema(productVariationUpdateSchema);
});
