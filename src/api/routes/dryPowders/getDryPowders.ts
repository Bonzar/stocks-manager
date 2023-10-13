import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  dryPowdersSchema,
  IDryPowdersSchema,
} from "./schemas/dryPowdersSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["DryPowder"],
    response: { 200: dryPowdersSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<IRouteOption<"Reply", IDryPowdersSchema>>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<RouteOpt>("/", routeOpt, async function (request, reply) {
    const dryPowderService = fastify.dryPowderService;

    return dryPowderService.getAll();
  });
};

export default fp;
