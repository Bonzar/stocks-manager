import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IVariationVolumesSchema,
  variationVolumesSchema,
} from "./schemas/variationVolumesSchema.js";

const routeOpt = {
  schema: {
    tags: ["VariationVolume"],
    response: { 200: variationVolumesSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<IRouteOption<"Reply", IVariationVolumesSchema>>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/", routeOpt, async function (request, reply) {
    const variationVolumeService = fastify.variationVolumeService;

    return variationVolumeService.getAll();
  });
};

export default fp;
