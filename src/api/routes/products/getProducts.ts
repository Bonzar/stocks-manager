import { FastifyPluginAsync } from "fastify";
import { IProductsSchema, productsSchema } from "./schemas/productsSchemas.js";

const fp: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get<{ Reply: IProductsSchema }>(
    "/",
    { schema: { response: { 200: productsSchema } } },
    async function (request, reply) {
      const productService = fastify.productService;
      request.headers.allow = "*";
      console.log();

      return productService.getAllProducts();
    },
  );
};

export default fp;
