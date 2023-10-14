import { IBaseCRUDRepository } from "./base/IBaseCRUDRepository.js";
import { IDryPowder } from "../../models/DryPowder.js";
import { Prisma } from "@prisma/client";

export interface IDryPowderRepository
  extends IBaseCRUDRepository<
    IDryPowder,
    Prisma.DryPowderCreateInput,
    Prisma.DryPowderUpdateInput
  > {}
