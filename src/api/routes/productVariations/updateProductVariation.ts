import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IProductVariationSchema,
  productVariationSchema,
} from "./schemas/productVariationSchema.js";
import { Prisma } from "@prisma/client";
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
    const {
      productId,
      quantity,
      description,
      variationType,
      variationVolumeId,
    } = request.body;

    const updateData: Prisma.ProductVariationUpdateInput = {
      quantity,
      description,
      variationType,
      product: { connect: { id: productId } },
    };

    if (typeof variationVolumeId === "number") {
      updateData.variationVolume = { connect: { id: variationVolumeId } };
    }

    return productVariationService.updateOneById(id, updateData);
  });
};

export default fp;
