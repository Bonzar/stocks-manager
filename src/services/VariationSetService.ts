import { IVariationSetService } from "../domain/interfaces/services/IVariationSetService.js";
import {
  ICreateVariationSet,
  IVariationSet,
  VariationSet,
} from "../domain/models/VariationSet.js";
import { IVariationSetRepository } from "../domain/interfaces/repositories/IVariationSetRepository.js";
import { IVariationSetValidator } from "../domain/interfaces/validators/modelsValidators/IVariationSetValidator.js";
import { VariationSetValidator } from "../domain/models/validators/modelValidators/VariationSetValidator.js";
import { Prisma } from "@prisma/client";

export class VariationSetService implements IVariationSetService {
  constructor(
    private variationSetRepository: IVariationSetRepository,
    private variationSetValidator: IVariationSetValidator = new VariationSetValidator(),
  ) {}

  getOneById(id: IdType): Promise<IVariationSet> {
    return this.variationSetRepository.getOneById(id);
  }

  getAll(): Promise<IVariationSet[]> {
    return this.variationSetRepository.getAll();
  }

  create(data: ICreateVariationSet): Promise<IVariationSet> {
    const validatedData = this.variationSetValidator.createValidator(data);

    return this.variationSetRepository.create({
      componentVariation: {
        connect: { id: validatedData.componentVariationId },
      },
      parentVariation: {
        connect: { id: validatedData.parentVariationId },
      },
    });
  }

  updateOneById(
    id: IdType,
    data: Partial<IVariationSet>,
  ): Promise<IVariationSet> {
    const { parentVariationId, componentVariationId } =
      this.variationSetValidator.updateValidator(data);

    const updateData: Prisma.VariationSetUpdateInput = {
      parentVariation: { connect: { id: parentVariationId } },
      componentVariation: { connect: { id: componentVariationId } },
    };

    return this.variationSetRepository.updateOneById(id, updateData);
  }

  deleteOneById(id: IdType): Promise<IVariationSet> {
    return this.variationSetRepository.deleteOneById(id);
  }

  toDomainModel(variationSetDto: IVariationSet): VariationSet {
    return new VariationSet(variationSetDto);
  }
}
