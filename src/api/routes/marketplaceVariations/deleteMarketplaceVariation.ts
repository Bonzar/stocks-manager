import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import {
  IMarketplaceVariationSchema,
  marketplaceVariationSchema,
} from "./schemas/marketplaceVariationSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["MarketplaceVariation"],
    params: idObjSchema,
    response: { 200: marketplaceVariationSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Reply", IMarketplaceVariationSchema>
>;

const fp: FastifyPluginAsync = async (fastify) => {
  fastify.delete<RouteOpt>("/:id", routeOpt, async (request) => {
    const marketplaceVariationService = fastify.marketplaceVariationService;
    const { id } = request.params;

    return marketplaceVariationService.deleteOneById(id);
  });
};

export default fp;
