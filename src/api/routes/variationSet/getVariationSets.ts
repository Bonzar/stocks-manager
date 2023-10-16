import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IVariationSetsSchema,
  variationSetsSchema,
} from "./schemas/variationSetsSchema.js";

const routeOpt = {
  schema: {
    tags: ["VariationSet"],
    response: { 200: variationSetsSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<IRouteOption<"Reply", IVariationSetsSchema>>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/", routeOpt, async function (request, reply) {
    const variationSetService = fastify.variationSetService;

    return variationSetService.getAll();
  });
};

export default fp;
