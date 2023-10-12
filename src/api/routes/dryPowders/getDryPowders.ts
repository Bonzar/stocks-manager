import { FastifyPluginAsync } from "fastify";
import {
  dryPowdersSchema,
  IDryPowdersSchema,
} from "./schemas/dryPowdersSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get<{ Reply: IDryPowdersSchema }>(
    "/",
    { schema: { tags: ["DryPowder"], response: { 200: dryPowdersSchema } } },
    async function (request, reply) {
      const dryPowderService = fastify.dryPowderService;

      return dryPowderService.getAll();
    },
  );
};

export default fp;
