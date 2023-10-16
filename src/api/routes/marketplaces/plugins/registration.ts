import fp from "fastify-plugin";
import { MarketplaceService } from "../../../../services/MarketplaceService.js";
import { MarketplaceRepository } from "../../../../infrastructure/repositories/MarketplaceRepository.js";

declare module "fastify" {
  export interface FastifyInstance {
    marketplaceService: MarketplaceService;
  }
}

export default fp(async (fastify, opt) => {
  const marketplaceRepository = new MarketplaceRepository(fastify.prisma);
  const marketplaceService = new MarketplaceService(marketplaceRepository);

  fastify.decorate("marketplaceService", marketplaceService);
});
