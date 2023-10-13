import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IProductVariationsSchema,
  productVariationsSchema,
} from "./schemas/productVariationsSchema.js";

const routeOpt = {
  schema: {
    tags: ["ProductVariation"],
    response: { 200: productVariationsSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<IRouteOption<"Reply", IProductVariationsSchema>>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/", routeOpt, async function (request, reply) {
    const productVariationService = fastify.productVariationService;

    return productVariationService.getAll();
  });
};

export default fp;
