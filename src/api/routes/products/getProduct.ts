import { IProductSchema, productSchema } from "./schemas/productSchema.js";
import { FastifyPluginAsync } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<{ Params: IIdObjSchema; Reply: IProductSchema }>(
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

      return productService.getOneById(id);
    },
  );
};

export default fp;
