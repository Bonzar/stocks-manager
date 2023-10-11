import fp from "fastify-plugin";
import { productsSchema } from "./productsSchemas.js";
import { productSchema } from "./productSchema.js";
import { productCreateSchema } from "./productCreateSchema.js";

export default fp(async (fastify, opts) => {
  fastify.addSchema(productSchema);
  fastify.addSchema(productsSchema);
  fastify.addSchema(productCreateSchema);
});
