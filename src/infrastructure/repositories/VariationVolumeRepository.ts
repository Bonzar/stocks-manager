import { IVariationVolumeRepository } from "../../domain/interfaces/repositories/IVariationVolumeRepository.js";
import { IVariationVolume } from "../../domain/models/VariationVolume.js";
import { Prisma, PrismaClient } from "@prisma/client";

export class VariationVolumeRepository implements IVariationVolumeRepository {
  constructor(private prisma: PrismaClient) {}

  getAll(): Promise<IVariationVolume[]> {
    return this.prisma.variationVolume.findMany();
  }

  getOneById(id: IdType): Promise<IVariationVolume> {
    return this.prisma.variationVolume.findUniqueOrThrow({ where: { id } });
  }

  create(data: Prisma.VariationVolumeCreateInput): Promise<IVariationVolume> {
    return this.prisma.variationVolume.create({ data });
  }

  updateOneById(
    id: IdType,
    data: Prisma.VariationVolumeUpdateInput,
  ): Promise<IVariationVolume> {
    return this.prisma.variationVolume.update({ where: { id }, data });
  }

  deleteOneById(id: IdType): Promise<IVariationVolume> {
    return this.prisma.variationVolume.delete({ where: { id } });
  }
}
