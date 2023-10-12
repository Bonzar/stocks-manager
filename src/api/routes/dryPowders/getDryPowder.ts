import { FastifyPluginAsync } from "fastify";
import {
  dryPowderSchema,
  IDryPowderSchema,
} from "./schemas/dryPowderSchema.js";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<{ Params: IIdObjSchema; Reply: IDryPowderSchema }>(
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

      return dryPowderService.getOneById(id);
    },
  );
};

export default fp;
