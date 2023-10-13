import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import {
  IProductUpdateSchema,
  productUpdateSchema,
} from "./schemas/productUpdateSchema.js";
import { IProductSchema, productSchema } from "./schemas/productSchema.js";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";

const routeOpt = {
  schema: {
    tags: ["Product"],
    params: idObjSchema,
    body: productUpdateSchema,
    response: { 200: productSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Params", IIdObjSchema>,
  IRouteOption<"Body", IProductUpdateSchema>,
  IRouteOption<"Reply", IProductSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.patch<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const productService = fastify.productService;
    const { id } = request.params;
    const { name } = request.body;

    return productService.updateOneById(id, { name });
  });
};

export default fp;
