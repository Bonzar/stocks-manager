import { IDryPowderRepository } from "../../domain/interfaces/repositories/IDryPowderRepository.js";
import { IDryPowder } from "../../domain/models/DryPowder.js";
import { Prisma, PrismaClient } from "@prisma/client";

export class DryPowderRepository implements IDryPowderRepository {
  constructor(private prisma: PrismaClient) {}

  public getAll(): Promise<IDryPowder[]> {
    return this.prisma.dryPowder.findMany();
  }

  public getOneById(id: IdType): Promise<IDryPowder> {
    return this.prisma.dryPowder.findUniqueOrThrow({
      where: { id },
    });
  }

  public create(data: Prisma.DryPowderCreateInput): Promise<IDryPowder> {
    return this.prisma.dryPowder.create({ data });
  }

  public updateOneById(
    id: IdType,
    data: Prisma.DryPowderUpdateInput,
  ): Promise<IDryPowder> {
    return this.prisma.dryPowder.update({
      where: { id },
      data,
    });
  }

  public deleteOneById(id: IdType): Promise<IDryPowder> {
    return this.prisma.dryPowder.delete({ where: { id } });
  }
}
