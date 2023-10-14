import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IProductVariationCreateSchema,
  productVariationCreateSchema,
} from "./schemas/productVariationCreateSchema.js";
import {
  IProductVariationSchema,
  productVariationSchema,
} from "./schemas/productVariationSchema.js";

const routeOpt = {
  schema: {
    tags: ["ProductVariation"],
    body: productVariationCreateSchema,
    response: { 200: productVariationSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Reply", IProductVariationSchema>,
  IRouteOption<"Body", IProductVariationCreateSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<RouteOpt>("/", routeOpt, async function (request, reply) {
    const productVariationService = fastify.productVariationService;

    return productVariationService.create(request.body);
  });
};

export default fp;
