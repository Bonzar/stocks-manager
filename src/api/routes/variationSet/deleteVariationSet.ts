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
  IRouteOption<"Reply", IVariationSetSchema>,
  IRouteOption<"Params", IIdObjSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.delete<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const variationSetService = fastify.variationSetService;
    const { id } = request.params;

    return variationSetService.deleteOneById(id);
  });
};

export default fp;
