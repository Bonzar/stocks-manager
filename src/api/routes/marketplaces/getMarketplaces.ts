import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  IMarketplacesSchema,
  marketplacesSchema,
} from "./schemas/marketplacesSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["Marketplace"],
    response: { 200: marketplacesSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<IRouteOption<"Reply", IMarketplacesSchema>>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/", routeOpt, async function (request, reply) {
    const marketplaceService = fastify.marketplaceService;

    return marketplaceService.getAll();
  });
};

export default fp;
