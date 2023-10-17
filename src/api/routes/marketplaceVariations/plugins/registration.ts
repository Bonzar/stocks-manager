import { MarketplaceVariationService } from "../../../../services/MarketplaceVariationService.js";
import fp from "fastify-plugin";
import { MarketplaceVariationRepository } from "../../../../infrastructure/repositories/MarketplaceVariationRepository.js";

declare module "fastify" {
  export interface FastifyInstance {
    marketplaceVariationService: MarketplaceVariationService;
  }
}

export default fp(async (fastify) => {
  const marketplaceVariationRepository = new MarketplaceVariationRepository(
    fastify.prisma,
  );
  const marketplaceVariationService = new MarketplaceVariationService(
    marketplaceVariationRepository,
  );

  fastify.decorate("marketplaceVariationService", marketplaceVariationService);
});
