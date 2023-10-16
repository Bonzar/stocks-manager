import { IVariationSetService } from "../domain/interfaces/services/IVariationSetService.js";
import {
  ICreateVariationSet,
  IVariationSet,
  VariationSet,
} from "../domain/models/VariationSet.js";
import { IVariationSetRepository } from "../domain/interfaces/repositories/IVariationSetRepository.js";
import { IVariationSetValidator } from "../domain/interfaces/validators/modelsValidators/IVariationSetValidator.js";
import { Prisma } from "@prisma/client";

export class VariationSetService implements IVariationSetService {
  private variationSetRepository: IVariationSetRepository;
  private variationSetValidator: IVariationSetValidator;

  constructor(
    variationSetRepository: IVariationSetRepository,
    variationSetValidator: IVariationSetValidator,
  ) {
    this.variationSetRepository = variationSetRepository;
    this.variationSetValidator = variationSetValidator;
  }

  getOneById(id: IdType): Promise<IVariationSet> {
    return this.variationSetRepository.getOneById(id);
  }

  getAll(): Promise<IVariationSet[]> {
    return this.variationSetRepository.getAll();
  }

  async create(data: ICreateVariationSet): Promise<IVariationSet> {
    const validatedData =
      await this.variationSetValidator.createValidator(data);

    return this.variationSetRepository.create({
      componentVariation: {
        connect: { id: validatedData.componentVariationId },
      },
      parentVariation: {
        connect: { id: validatedData.parentVariationId },
      },
    });
  }

  async updateOneById(
    id: IdType,
    data: Partial<IVariationSet>,
  ): Promise<IVariationSet> {
    const { parentVariationId, componentVariationId } =
      await this.variationSetValidator.updateValidator(data);

    const updateData: Prisma.VariationSetUpdateInput = {
      parentVariation:
        parentVariationId === undefined
          ? undefined
          : { connect: { id: parentVariationId } },

      componentVariation:
        componentVariationId === undefined
          ? undefined
          : { connect: { id: componentVariationId } },
    };

    return this.variationSetRepository.updateOneById(id, updateData);
  }

  deleteOneById(id: IdType): Promise<IVariationSet> {
    return this.variationSetRepository.deleteOneById(id);
  }

  async toDomainModel(variationSetDto: IVariationSet): Promise<VariationSet> {
    const id = this.variationSetValidator.idValidator(variationSetDto.id);

    const validatedData =
      await this.variationSetValidator.createValidator(variationSetDto);

    return new VariationSet({ ...validatedData, id });
  }
}
