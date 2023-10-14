import fp from "fastify-plugin";
import { DryPowderService } from "../../../../services/DryPowderService.js";
import { DryPowderRepository } from "../../../../infrastructure/repositories/DryPowderRepository.js";

declare module "fastify" {
  export interface FastifyInstance {
    dryPowderService: DryPowderService;
  }
}

export default fp(async (fastify, opt) => {
  const dryPowderRepository = new DryPowderRepository(fastify.prisma);
  const dryPowderService = new DryPowderService(dryPowderRepository);

  fastify.decorate("dryPowderService", dryPowderService);
});
