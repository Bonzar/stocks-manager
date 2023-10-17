import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import {
  IMarketplaceVariationUpdateSchema,
  marketplaceVariationUpdateSchema,
} from "./schemas/marketplaceVariationUpdateSchema.js";
import {
  IMarketplaceVariationSchema,
  marketplaceVariationSchema,
} from "./schemas/marketplaceVariationSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["MarketplaceVariation"],
    params: idObjSchema,
    body: marketplaceVariationUpdateSchema,
    response: { 200: marketplaceVariationSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Body", IMarketplaceVariationUpdateSchema>,
  IRouteOption<"Reply", IMarketplaceVariationSchema>
>;

const fp: FastifyPluginAsync = async (fastify) => {
  fastify.patch<RouteOpt>("/:id", routeOpt, async (request) => {
    const marketplaceVariationService = fastify.marketplaceVariationService;
    const { id } = request.params;

    return marketplaceVariationService.updateOneById(id, request.body);
  });
};

export default fp;
