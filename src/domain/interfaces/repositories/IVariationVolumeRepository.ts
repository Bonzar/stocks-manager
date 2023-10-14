import { IBaseCRUDRepository } from "./IBaseCRUDRepository.js";
import { IVariationVolume } from "../../models/VariationVolume.js";
import { Prisma } from "@prisma/client";

export interface IVariationVolumeRepository
  extends IBaseCRUDRepository<
    IVariationVolume,
    Prisma.VariationVolumeCreateInput,
    Prisma.VariationVolumeUpdateInput
  > {}
