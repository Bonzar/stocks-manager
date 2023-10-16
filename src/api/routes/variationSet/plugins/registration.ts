import fp from "fastify-plugin";
import { VariationSetService } from "../../../../services/VariationSetService.js";
import { VariationSetRepository } from "../../../../infrastructure/repositories/VariationSetRepository.js";
import { ProductVariationRepository } from "../../../../infrastructure/repositories/ProductVariationRepository.js";
import { VariationSetValidator } from "../../../../services/validators/modelValidators/VariationSetValidator.js";

declare module "fastify" {
  export interface FastifyInstance {
    variationSetService: VariationSetService;
  }
}

export default fp(async (fastify) => {
  const variationSetRepository = new VariationSetRepository(fastify.prisma);

  const productVariationRepository = new ProductVariationRepository(
    fastify.prisma,
  );

  const variationSetValidator = new VariationSetValidator(
    productVariationRepository,
  );

  const variationSetService = new VariationSetService(
    variationSetRepository,
    variationSetValidator,
  );

  fastify.decorate("variationSetService", variationSetService);
});
