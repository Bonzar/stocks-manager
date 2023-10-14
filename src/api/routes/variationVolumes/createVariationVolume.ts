import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IVariationVolumeCreateSchema,
  variationVolumeCreateSchema,
} from "./schemas/variationVolumeCreateSchema.js";
import {
  IVariationVolumeSchema,
  variationVolumeSchema,
} from "./schemas/variationVolumeSchema.js";

const routeOpt = {
  schema: {
    tags: ["VariationVolume"],
    body: variationVolumeCreateSchema,
    response: { 200: variationVolumeSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Body", IVariationVolumeCreateSchema>,
  IRouteOption<"Reply", IVariationVolumeSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<RouteOpt>("/", routeOpt, async function (request, reply) {
    const variationVolumeService = fastify.variationVolumeService;

    return variationVolumeService.create(request.body);
  });
};

export default fp;
