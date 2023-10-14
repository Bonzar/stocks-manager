import fp from "fastify-plugin";
import { VariationVolumeRepository } from "../../../../infrastructure/repositories/VariationVolumeRepository.js";
import { VariationVolumeService } from "../../../../services/VariationVolumeService.js";

declare module "fastify" {
  export interface FastifyInstance {
    variationVolumeService: VariationVolumeService;
  }
}

export default fp(async (fastify) => {
  const variationVolumeRepository = new VariationVolumeRepository(
    fastify.prisma,
  );

  const variationVolumeService = new VariationVolumeService(
    variationVolumeRepository,
  );

  fastify.decorate("variationVolumeService", variationVolumeService);
});
