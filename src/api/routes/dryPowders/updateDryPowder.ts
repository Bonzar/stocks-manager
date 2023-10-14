import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  dryPowderSchema,
  IDryPowderSchema,
} from "./schemas/dryPowderSchema.js";
import {
  dryPowderUpdateSchema,
  IDryPowderUpdateSchema,
} from "./schemas/dryPowderUpdateSchema.js";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["DryPowder"],
    params: idObjSchema,
    body: dryPowderUpdateSchema,
    response: { 200: dryPowderSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Body", IDryPowderUpdateSchema>,
  IRouteOption<"Reply", IDryPowderSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.patch<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const dryPowderService = fastify.dryPowderService;
    const { id } = request.params;

    return dryPowderService.updateOneById(id, request.body);
  });
};

export default fp;
