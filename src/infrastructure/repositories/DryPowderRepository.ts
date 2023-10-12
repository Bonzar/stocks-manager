import { IDryPowderRepository } from "../../domain/interfaces/repositories/IDryPowderRepository.js";
import { DryPowder } from "../../domain/models/DryPowder.js";
import {
  DryPowder as IDryPowderPrisma,
  Prisma,
  PrismaClient,
} from "@prisma/client";

export class DryPowderRepository implements IDryPowderRepository {
  constructor(private prisma: PrismaClient) {}

  public async getAll(): Promise<DryPowder[]> {
    const dryPowdersDto = await this.prisma.dryPowder.findMany();

    return dryPowdersDto.map(this.toDomainModel);
  }

  public async getOneById(id: IdType): Promise<DryPowder> {
    const dryPowderDto = await this.prisma.dryPowder.findUniqueOrThrow({
      where: { id },
    });

    return this.toDomainModel(dryPowderDto);
  }

  public async create(data: Prisma.DryPowderCreateInput): Promise<DryPowder> {
    const dryPowderDto = await this.prisma.dryPowder.create({ data });

    return this.toDomainModel(dryPowderDto);
  }

  public async deleteOneById(id: IdType): Promise<DryPowder> {
    const dryPowderDto = await this.prisma.dryPowder.delete({ where: { id } });

    return this.toDomainModel(dryPowderDto);
  }

  public async updateOneById(
    id: IdType,
    data: Prisma.DryPowderUpdateInput,
  ): Promise<DryPowder> {
    const dryPowderDto = await this.prisma.dryPowder.update({
      where: { id },
      data,
    });

    return this.toDomainModel(dryPowderDto);
  }

  private toDomainModel(dryPowderDto: IDryPowderPrisma): DryPowder {
    const { id, code, quantity, productId } = dryPowderDto;

    return new DryPowder(id, code, quantity, productId);
  }
}
