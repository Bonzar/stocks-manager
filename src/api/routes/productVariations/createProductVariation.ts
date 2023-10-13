import { FastifyPluginAsync, RouteShorthandOptions } from "fastify";
import { IRouteOption, IRouteOptions } from "../../types/IRouteOptions.js";
import {
  IProductVariationCreateSchema,
  productVariationCreateSchema,
} from "./schemas/productVariationCreateSchema.js";
import {
  IProductVariationSchema,
  productVariationSchema,
} from "./schemas/productVariationSchema.js";
import { Prisma } from "@prisma/client";

const routeOpt = {
  schema: {
    tags: ["ProductVariation"],
    body: productVariationCreateSchema,
    response: { 200: productVariationSchema },
  },
} satisfies RouteShorthandOptions;

type RouteOpt = IRouteOptions<
  IRouteOption<"Reply", IProductVariationSchema>,
  IRouteOption<"Body", IProductVariationCreateSchema>
>;

const fp: FastifyPluginAsync = async (fastify, opts) => {
  fastify.post<RouteOpt>("/", routeOpt, async function (request, reply) {
    const productVariationService = fastify.productVariationService;
    const {
      productId,
      quantity,
      description,
      variationType,
      variationVolumeId,
    } = request.body;

    const createData: Prisma.ProductVariationCreateInput = {
      quantity,
      description,
      variationType,
      product: { connect: { id: productId } },
    };

    if (typeof variationVolumeId === "number") {
      createData.variationVolume = { connect: { id: variationVolumeId } };
    }

    return productVariationService.create(createData);
  });
};

export default fp;
