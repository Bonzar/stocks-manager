import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  IMarketplaceVariationsSchema,
  marketplaceVariationsSchema,
} from "./schemas/marketplaceVariationsSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["MarketplaceVariation"],
    response: { 200: marketplaceVariationsSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Reply", IMarketplaceVariationsSchema>
>;

const fp: FastifyPluginAsync = async (fastify) => {
  fastify.get<RouteOpt>("/", routeOpt, async () => {
    const marketplaceVariationService = fastify.marketplaceVariationService;

    return marketplaceVariationService.getAll();
  });
};

export default fp;
