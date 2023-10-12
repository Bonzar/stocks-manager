import { IProductSchema, productSchema } from "./schemas/productSchema.js";
import { FastifyPluginAsync } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.delete<{ Params: IIdObjSchema; Reply: IProductSchema }>(
    "/:id",
    {
      schema: {
        tags: ["Product"],
        params: idObjSchema,
        response: { 200: productSchema },
      },
    },
    async function (request, reply) {
      const productService = fastify.productService;
      const { id } = request.params;

      return productService.deleteOneById(id);
    },
  );
};

export default fp;
