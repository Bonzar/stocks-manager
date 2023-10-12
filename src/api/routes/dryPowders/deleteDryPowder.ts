import { FastifyPluginAsync } from "fastify";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import {
  dryPowderSchema,
  IDryPowderSchema,
} from "./schemas/dryPowderSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.delete<{ Params: IIdObjSchema; Reply: IDryPowderSchema }>(
    "/:id",
    {
      schema: {
        tags: ["DryPowder"],
        params: idObjSchema,
        response: { 200: dryPowderSchema },
      },
    },
    async function (request, reply) {
      const dryPowderService = fastify.dryPowderService;
      const { id } = request.params;

      return dryPowderService.deleteOneById(id);
    },
  );
};

export default fp;
