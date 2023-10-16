import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IVariationSetCreateSchema,
  variationSetCreateSchema,
} from "./schemas/variationSetCreateSchema.js";
import {
  IVariationSetSchema,
  variationSetSchema,
} from "./schemas/variationSetSchema.js";

const routeOpt = {
  schema: {
    tags: ["VariationSet"],
    body: variationSetCreateSchema,
    response: { 200: variationSetSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Body", IVariationSetCreateSchema>,
  IRouteOption<"Reply", IVariationSetSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<RouteOpt>("/", routeOpt, async function (request, reply) {
    const variationSetService = fastify.variationSetService;

    return variationSetService.create(request.body);
  });
};

export default fp;
