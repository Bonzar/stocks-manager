import { FastifyPluginAsync } from "fastify";
import {
  IProductUpdateSchema,
  productUpdateSchema,
} from "./schemas/productUpdateSchema.js";
import { IProductSchema, productSchema } from "./schemas/productSchema.js";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.patch<{
    Params: IIdObjSchema;
    Body: IProductUpdateSchema;
    Reply: IProductSchema;
  }>(
    "/:id",
    {
      schema: {
        tags: ["Product"],
        params: idObjSchema,
        body: productUpdateSchema,
        response: { 200: productSchema },
      },
    },
    async function (request, reply) {
      const productService = fastify.productService;
      const { id } = request.params;
      const { name } = request.body;

      return productService.updateOneById(id, { name });
    },
  );
};

export default fp;
