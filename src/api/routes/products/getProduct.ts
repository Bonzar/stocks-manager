import { IProductSchema, productSchema } from "./schemas/productSchema.js";
import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["Product"],
    params: idObjSchema,
    response: { 200: productSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Reply", IProductSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const productService = fastify.productService;
    const { id } = request.params;

    return productService.getOneById(id);
  });
};

export default fp;
