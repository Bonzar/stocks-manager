import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IProductVariationSchema,
  productVariationSchema,
} from "./schemas/productVariationSchema.js";
import {
  IProductVariationUpdateSchema,
  productVariationUpdateSchema,
} from "./schemas/productVariationUpdateSchema.js";
import { idObjSchema, IIdObjSchema } from "../../schemas/idSchema.js";

const routeOpt = {
  schema: {
    tags: ["ProductVariation"],
    params: idObjSchema,
    body: productVariationUpdateSchema,
    response: { 200: productVariationSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Reply", IProductVariationSchema>,
  IRouteOption<"Body", IProductVariationUpdateSchema>,
  IRouteOption<"Params", IIdObjSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.patch<RouteOpt>("/:id", routeOpt, async function (request, reply) {
    const productVariationService = fastify.productVariationService;
    const { id } = request.params;

    return productVariationService.updateOneById(id, request.body);
  });
};

export default fp;
