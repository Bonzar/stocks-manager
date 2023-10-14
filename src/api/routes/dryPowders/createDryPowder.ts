import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  dryPowderCreateSchema,
  IDryPowderCreateSchema,
} from "./schemas/dryPowderCreateSchema.js";
import {
  dryPowderSchema,
  IDryPowderSchema,
} from "./schemas/dryPowderSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["DryPowder"],
    body: dryPowderCreateSchema,
    response: { 200: dryPowderSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Body", IDryPowderCreateSchema>,
  IRouteOption<"Reply", IDryPowderSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<RouteOpt>("/", routeOpt, async function (request, reply) {
    const dryPowderService = fastify.dryPowderService;

    return dryPowderService.create(request.body);
  });
};

export default fp;
