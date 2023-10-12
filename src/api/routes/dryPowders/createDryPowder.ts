import { FastifyPluginAsync } from "fastify";
import {
  dryPowderCreateSchema,
  IDryPowderCreateSchema,
} from "./schemas/dryPowderCreateSchema.js";
import {
  dryPowderSchema,
  IDryPowderSchema,
} from "./schemas/dryPowderSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<{ Body: IDryPowderCreateSchema; Reply: IDryPowderSchema }>(
    "/",
    {
      schema: {
        tags: ["DryPowder"],
        body: dryPowderCreateSchema,
        response: { 200: dryPowderSchema },
      },
    },
    async function (request, reply) {
      const dryPowderService = fastify.dryPowderService;
      const { code, quantity, productId } = request.body;

      return dryPowderService.create({
        code,
        quantity,
        product: {
          connect: {
            id: productId,
          },
        },
      });
    },
  );
};

export default fp;
