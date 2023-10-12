import { FastifyPluginAsync } from "fastify";
import {
  IProductCreateSchema,
  productCreateSchema,
} from "./schemas/productCreateSchema.js";
import { IProductSchema, productSchema } from "./schemas/productSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<{ Body: IProductCreateSchema; Reply: IProductSchema }>(
    "/",
    {
      schema: {
        tags: ["Product"],
        body: productCreateSchema,
        response: { 200: productSchema },
      },
    },
    async function (request, reply) {
      const productService = fastify.productService;
      const { name } = request.body;

      return productService.create({ name });
    },
  );
};

export default fp;
