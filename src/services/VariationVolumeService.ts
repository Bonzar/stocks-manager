import { VariationVolumeValidator } from "../domain/models/validators/VariationVolumeValidator.js";
import {
  ICreateVariationVolume,
  IVariationVolume,
  VariationVolume,
} from "../domain/models/VariationVolume.js";
import type { IVariationVolumeService } from "../domain/interfaces/services/IVariationVolumeService.js";
import type { IVariationVolumeRepository } from "../domain/interfaces/repositories/IVariationVolumeRepository.js";
import type { IVariationVolumeValidator } from "../domain/interfaces/validators/IVariationVolumeValidator.js";

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

  create(data: ICreateVariationVolume): Promise<IVariationVolume> {
    const validatedData = this.variationVolumeValidator.createValidator(data);

    return this.variationVolumeRepository.create(validatedData);
  }

  updateOneById(
    id: IdType,
    data: Partial<IVariationVolume>,
  ): Promise<IVariationVolume> {
    const validatedData = this.variationVolumeValidator.updateValidator(data);

    return this.variationVolumeRepository.updateOneById(id, validatedData);
  }

  deleteOneById(id: IdType): Promise<IVariationVolume> {
    return this.variationVolumeRepository.deleteOneById(id);
  }

  toDomainModel(variationVolumeDto: IVariationVolume): VariationVolume {
    return new VariationVolume(variationVolumeDto);
  }
}
