import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IProductVariationSchema,
  productVariationSchema,
} from "./schemas/productVariationSchema.js";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";

const routeOpt = {
  schema: {
    tags: ["ProductVariation"],
    params: idObjSchema,
    response: { 200: productVariationSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Reply", IProductVariationSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const productVariationService = fastify.productVariationService;
    const { id } = request.params;

    return productVariationService.getOneById(id);
  });
};

export default fp;
