import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import {
  IVariationVolumeSchema,
  variationVolumeSchema,
} from "./schemas/variationVolumeSchema.js";
import {
  IVariationVolumeUpdateSchema,
  variationVolumeUpdateSchema,
} from "./schemas/variationVolumeUpdateSchema.js";

const routeOpt = {
  schema: {
    tags: ["VariationVolume"],
    params: idObjSchema,
    body: variationVolumeUpdateSchema,
    response: { 200: variationVolumeSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Reply", IVariationVolumeSchema>,
  IRouteOption<"Body", IVariationVolumeUpdateSchema>,
  IRouteOption<"Params", IIdObjSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.patch<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const variationVolumeService = fastify.variationVolumeService;
    const { id } = request.params;

    return variationVolumeService.updateOneById(id, request.body);
  });
};

export default fp;
