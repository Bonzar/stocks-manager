import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import {
  IVariationSetSchema,
  variationSetSchema,
} from "./schemas/variationSetSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IVariationSetUpdateSchema,
  variationSetUpdateSchema,
} from "./schemas/variationSetUpdateSchema.js";

const routeOpt = {
  schema: {
    tags: ["VariationSet"],
    params: idObjSchema,
    body: variationSetUpdateSchema,
    response: { 200: variationSetSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Body", IVariationSetUpdateSchema>,
  IRouteOption<"Reply", IVariationSetSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.patch<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const variationSetService = fastify.variationSetService;
    const { id } = request.params;

    return variationSetService.updateOneById(id, request.body);
  });
};

export default fp;
