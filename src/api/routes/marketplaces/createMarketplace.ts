import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  IMarketplaceCreateSchema,
  marketplaceCreateSchema,
} from "./schemas/marketplaceCreateSchema.js";
import {
  IMarketplaceSchema,
  marketplaceSchema,
} from "./schemas/marketplaceSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["Marketplace"],
    body: marketplaceCreateSchema,
    response: { 200: marketplaceSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Body", IMarketplaceCreateSchema>,
  IRouteOption<"Reply", IMarketplaceSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<RouteOpt>("/", routeOpt, async function (request, reply) {
    const marketplaceService = fastify.marketplaceService;

    return marketplaceService.create(request.body);
  });
};

export default fp;
