import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IVariationSetSchema,
  variationSetSchema,
} from "./schemas/variationSetSchema.js";

const routeOpt = {
  schema: {
    tags: ["VariationSet"],
    params: idObjSchema,
    response: { 200: variationSetSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Reply", IVariationSetSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const variationSetService = fastify.variationSetService;
    const { id } = request.params;

    return variationSetService.getOneById(id);
  });
};

export default fp;
