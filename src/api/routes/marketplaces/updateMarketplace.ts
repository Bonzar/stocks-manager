import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import {
  IMarketplaceSchema,
  marketplaceSchema,
} from "./schemas/marketplaceSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IMarketplaceUpdateSchema,
  marketplaceUpdateSchema,
} from "./schemas/marketplaceUpdateSchema.js";

const routeOpt = {
  schema: {
    tags: ["Marketplace"],
    params: idObjSchema,
    body: marketplaceUpdateSchema,
    response: { 200: marketplaceSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Body", IMarketplaceUpdateSchema>,
  IRouteOption<"Reply", IMarketplaceSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.patch<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const marketplaceService = fastify.marketplaceService;
    const { id } = request.params;

    return marketplaceService.updateOneById(id, request.body);
  });
};

export default fp;
