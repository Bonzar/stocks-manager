import { IProductSchema, productSchema } from "./schemas/productSchema.js";
import { FastifyPluginAsync } from "fastify";
import {
  idParamsSchema,
  IIdParamsSchema,
} from "../../schemas/idParamsSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.delete<{ Params: IIdParamsSchema; Reply: IProductSchema }>(
    "/:id",
    {
      schema: {
        params: idParamsSchema,
        response: { 200: productSchema },
      },
    },
    async function (request, reply) {
      const productService = fastify.productService;
      const productId = request.params.id;

      return productService.deleteProduct(productId);
    },
  );
};

export default fp;
