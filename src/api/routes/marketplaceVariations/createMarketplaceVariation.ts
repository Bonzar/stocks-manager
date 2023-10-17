import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  IMarketplaceVariationCreateSchema,
  marketplaceVariationCreateSchema,
} from "./schemas/marketplaceVariationCreateSchema.js";
import {
  IMarketplaceVariationSchema,
  marketplaceVariationSchema,
} from "./schemas/marketplaceVariationSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["MarketplaceVariation"],
    body: marketplaceVariationCreateSchema,
    response: { 200: marketplaceVariationSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Body", IMarketplaceVariationCreateSchema>,
  IRouteOption<"Reply", IMarketplaceVariationSchema>
>;

const fp: FastifyPluginAsync = async (fastify) => {
  fastify.post<RouteOpt>("/", routeOpt, async (request) => {
    const marketplaceVariationService = fastify.marketplaceVariationService;

    return marketplaceVariationService.create(request.body);
  });
};

export default fp;
