import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  IProductCreateSchema,
  productCreateSchema,
} from "./schemas/productCreateSchema.js";
import { IProductSchema, productSchema } from "./schemas/productSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["Product"],
    body: productCreateSchema,
    response: { 200: productSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Reply", IProductSchema>,
  IRouteOption<"Body", IProductCreateSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<RouteOpt>("/", routeOpt, async function (request, reply) {
    const productService = fastify.productService;
    const { name } = request.body;

    return productService.create({ name });
  });
};

export default fp;
