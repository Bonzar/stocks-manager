import fp from "fastify-plugin";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";

export default fp(async (fastify) => {
  fastify.register(swagger, {
    openapi: {
      info: {
        title: "Stocks manager API",
        description: "Stocks manager for different marketplaces",
        version: "1.0.0",
      },
    },
  });

  fastify.register(swaggerUI, {
    routePrefix: "/docs",
  });
});
