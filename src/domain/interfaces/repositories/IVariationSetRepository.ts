import { IBaseCRUDRepository } from "./base/IBaseCRUDRepository.js";
import { IVariationSet } from "../../models/VariationSet.js";
import { Prisma } from "@prisma/client";

export interface IVariationSetRepository
  extends IBaseCRUDRepository<
    IVariationSet,
    Prisma.VariationSetCreateInput,
    Prisma.VariationSetUpdateInput
  > {}
