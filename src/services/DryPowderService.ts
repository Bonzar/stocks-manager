import { IDryPowderService } from "../domain/interfaces/services/IDryPowderService.js";
import { DryPowder } from "../domain/models/DryPowder.js";
import { IDryPowderRepository } from "../domain/interfaces/repositories/IDryPowderRepository.js";
import { Prisma } from "@prisma/client";

export class DryPowderService implements IDryPowderService {
  constructor(private dryPowderRepository: IDryPowderRepository) {}

  getOneById(id: IdType): Promise<DryPowder> {
    return this.dryPowderRepository.getOneById(id);
  }

  getAll(): Promise<DryPowder[]> {
    return this.dryPowderRepository.getAll();
  }

  create(data: Prisma.DryPowderCreateInput): Promise<DryPowder> {
    return this.dryPowderRepository.create(data);
  }

  updateOneById(
    id: IdType,
    data: Prisma.DryPowderUpdateInput,
  ): Promise<DryPowder> {
    return this.dryPowderRepository.updateOneById(id, data);
  }

  deleteOneById(id: IdType): Promise<DryPowder> {
    return this.dryPowderRepository.deleteOneById(id);
  }
}
