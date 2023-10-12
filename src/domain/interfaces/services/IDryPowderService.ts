import { IBaseCRUDService } from "./IBaseCRUDService.js";
import { DryPowder } from "../../models/DryPowder.js";
import { Prisma } from "@prisma/client";

export interface IDryPowderService
  extends IBaseCRUDService<
    DryPowder,
    Prisma.DryPowderCreateInput,
    Prisma.DryPowderUpdateInput
  > {}
