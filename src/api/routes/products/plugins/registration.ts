import fp from "fastify-plugin";
import { ProductRepository } from "../../../../infrastructure/repositories/ProductRepository.js";
import { ProductService } from "../../../../services/ProductService.js";

declare module "fastify" {
  export interface FastifyInstance {
    productService: ProductService;
  }
}

export default fp(async (fastify, opt) => {
  const productRepository = new ProductRepository(fastify.prisma);
  const productService = new ProductService(productRepository);

  fastify.decorate("productService", productService);
});
