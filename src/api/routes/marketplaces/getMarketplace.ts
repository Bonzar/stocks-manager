import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import {
  IMarketplaceSchema,
  marketplaceSchema,
} from "./schemas/marketplaceSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["Marketplace"],
    params: idObjSchema,
    response: { 200: marketplaceSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Reply", IMarketplaceSchema>
>;

const fp: FastifyPluginAsync = async (fastify) => {
  fastify.get<RouteOpt>("/:id", routeOpt, async (request) => {
    const marketplaceService = fastify.marketplaceService;
    const { id } = request.params;

    return marketplaceService.getOneById(id);
  });
};

export default fp;
