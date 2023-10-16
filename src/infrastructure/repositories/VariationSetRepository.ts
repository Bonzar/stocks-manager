import { BaseCRUDRepository } from "./base/BaseCRUDRepository.js";
import { IVariationSet } from "../../domain/models/VariationSet.js";
import { Prisma } from "@prisma/client";
import { IVariationSetRepository } from "../../domain/interfaces/repositories/IVariationSetRepository.js";

export class VariationSetRepository
  extends BaseCRUDRepository<
    IVariationSet,
    Prisma.VariationSetCreateInput,
    Prisma.VariationSetUpdateInput
  >
  implements IVariationSetRepository
{
  protected prismaModel = this.prisma.variationSet;
}
