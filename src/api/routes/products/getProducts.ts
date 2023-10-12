import { FastifyPluginAsync } from "fastify";
import { IProductsSchema, productsSchema } from "./schemas/productsSchemas.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<{ Reply: IProductsSchema }>(
    "/",
    { schema: { tags: ["Product"], response: { 200: productsSchema } } },
    async function (request, reply) {
      const productService = fastify.productService;

      return productService.getAll();
    },
  );
};

export default fp;
