import { IDryPowderRepository } from "../../domain/interfaces/repositories/IDryPowderRepository.js";
import { IDryPowder } from "../../domain/models/DryPowder.js";
import { Prisma } from "@prisma/client";
import { BaseCRUDRepository } from "./base/BaseCRUDRepository.js";

export class DryPowderRepository
  extends BaseCRUDRepository<
    IDryPowder,
    Prisma.DryPowderCreateInput,
    Prisma.DryPowderUpdateInput
  >
  implements IDryPowderRepository
{
  protected prismaModel = this.prisma.dryPowder;
}
