import { FastifyPluginAsync } from "fastify";
import {
  dryPowderSchema,
  IDryPowderSchema,
} from "./schemas/dryPowderSchema.js";
import {
  dryPowderUpdateSchema,
  IDryPowderUpdateSchema,
} from "./schemas/dryPowderUpdateSchema.js";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.patch<{
    Params: IIdObjSchema;
    Body: IDryPowderUpdateSchema;
    Reply: IDryPowderSchema;
  }>(
    "/:id",
    {
      schema: {
        tags: ["DryPowder"],
        params: idObjSchema,
        body: dryPowderUpdateSchema,
        response: { 200: dryPowderSchema },
      },
    },
    async function (request, reply) {
      const dryPowderService = fastify.dryPowderService;
      const { id } = request.params;
      const { code, quantity, productId } = request.body;

      return dryPowderService.updateOneById(id, {
        code,
        quantity,
        product: {
          update: {
            id: productId,
          },
        },
      });
    },
  );
};

export default fp;
