import {
  ICreateVariationVolume,
  IVariationVolume,
  VariationVolume,
} from "../domain/models/VariationVolume.js";
import type { IVariationVolumeService } from "../domain/interfaces/services/IVariationVolumeService.js";
import type { IVariationVolumeRepository } from "../domain/interfaces/repositories/IVariationVolumeRepository.js";
import { IVariationVolumeValidator } from "../domain/interfaces/validators/modelsValidators/IVariationVolumeValidator.js";
import { VariationVolumeValidator } from "./validators/modelValidators/VariationVolumeValidator.js";

export class VariationVolumeService implements IVariationVolumeService {
  constructor(
    private variationVolumeRepository: IVariationVolumeRepository,
    private variationVolumeValidator: IVariationVolumeValidator = new VariationVolumeValidator(),
  ) {}

  getAll(): Promise<IVariationVolume[]> {
    return this.variationVolumeRepository.getAll();
  }

  getOneById(id: IdType): Promise<IVariationVolume> {
    return this.variationVolumeRepository.getOneById(id);
  }

  async create(data: ICreateVariationVolume): Promise<IVariationVolume> {
    const validatedData =
      await this.variationVolumeValidator.createValidator(data);

    return this.variationVolumeRepository.create(validatedData);
  }

  async updateOneById(
    id: IdType,
    data: Partial<IVariationVolume>,
  ): Promise<IVariationVolume> {
    const validatedData =
      await this.variationVolumeValidator.updateValidator(data);

    return this.variationVolumeRepository.updateOneById(id, validatedData);
  }

  deleteOneById(id: IdType): Promise<IVariationVolume> {
    return this.variationVolumeRepository.deleteOneById(id);
  }

  async toDomainModel(
    variationVolumeDto: IVariationVolume,
  ): Promise<VariationVolume> {
    const id = this.variationVolumeValidator.idValidator(variationVolumeDto.id);

    const validatedData =
      await this.variationVolumeValidator.createValidator(variationVolumeDto);

    return new VariationVolume({ ...validatedData, id });
  }
}
