import fp from "fastify-plugin";
import { VariationSetService } from "../../../../services/VariationSetService.js";
import { VariationSetRepository } from "../../../../infrastructure/repositories/VariationSetRepository.js";

declare module "fastify" {
  export interface FastifyInstance {
    variationSetService: VariationSetService;
  }
}

export default fp(async (fastify) => {
  const variationSetRepository = new VariationSetRepository(fastify.prisma);
  const variationSetService = new VariationSetService(variationSetRepository);

  fastify.decorate("variationSetService", variationSetService);
});
