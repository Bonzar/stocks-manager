import fp from "fastify-plugin";
import { ProductVariationService } from "../../../../services/ProductVariationService.js";
import { ProductVariationRepository } from "../../../../infrastructure/repositories/ProductVariationRepository.js";

declare module "fastify" {
  export interface FastifyInstance {
    productVariationRepository: ProductVariationRepository;
    productVariationService: ProductVariationService;
  }
}

export default fp(async (fastify, opt) => {
  const productVariationRepository = new ProductVariationRepository(
    fastify.prisma,
  );

  const productVariationService = new ProductVariationService(
    productVariationRepository,
  );

  fastify.decorate("productVariationService", productVariationService);
  fastify.decorate("productVariationRepository", productVariationRepository);
});
