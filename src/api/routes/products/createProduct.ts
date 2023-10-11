import { FastifyPluginAsync } from "fastify";
import {
  IProductCreateSchema,
  productCreateSchema,
} from "./schemas/productCreateSchema.js";
import { IProductSchema, productSchema } from "./schemas/productSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post<{ Body: IProductCreateSchema; Reply: IProductSchema }>(
    "/",
    {
      schema: {
        body: productCreateSchema,
        response: { 200: productSchema },
      },
    },
    async function (request, reply) {
      const productService = fastify.productService;

      return productService.createProduct(request.body.name);
    },
  );
};

export default fp;
