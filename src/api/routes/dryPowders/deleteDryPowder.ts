import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import {
  dryPowderSchema,
  IDryPowderSchema,
} from "./schemas/dryPowderSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["DryPowder"],
    params: idObjSchema,
    response: { 200: dryPowderSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Reply", IDryPowderSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.delete<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const dryPowderService = fastify.dryPowderService;
    const { id } = request.params;

    return dryPowderService.deleteOneById(id);
  });
};

export default fp;
