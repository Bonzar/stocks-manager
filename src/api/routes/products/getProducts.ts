import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IProductsSchema, productsSchema } from "./schemas/productsSchemas.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["Product"],
    response: { 200: productsSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<IRouteOption<"Reply", IProductsSchema>>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/", routeOpt, async function (request, reply) {
    const productService = fastify.productService;

    return productService.getAll();
  });
};

export default fp;
