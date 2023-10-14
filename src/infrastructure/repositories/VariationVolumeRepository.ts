import { IVariationVolumeRepository } from "../../domain/interfaces/repositories/IVariationVolumeRepository.js";
import { IVariationVolume } from "../../domain/models/VariationVolume.js";
import { Prisma } from "@prisma/client";
import { BaseCRUDRepository } from "./base/BaseCRUDRepository.js";

export class VariationVolumeRepository
  extends BaseCRUDRepository<
    IVariationVolume,
    Prisma.VariationVolumeCreateInput,
    Prisma.VariationVolumeUpdateInput
  >
  implements IVariationVolumeRepository
{
  protected prismaModel = this.prisma.variationVolume;
}
