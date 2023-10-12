import { IBaseCRUDRepository } from "./IBaseCRUDRepository.js";
import { DryPowder } from "../../models/DryPowder.js";
import { Prisma } from "@prisma/client";

export interface IDryPowderRepository
  extends IBaseCRUDRepository<
    DryPowder,
    Prisma.DryPowderCreateInput,
    Prisma.DryPowderUpdateInput
  > {}
