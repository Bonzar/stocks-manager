import { IVariationVolumeService } from "../domain/interfaces/services/IVariationVolumeService.js";
import {
  ICreateVariationVolume,
  IVariationVolume,
  VariationVolume,
} from "../domain/models/VariationVolume.js";
import { IVariationVolumeRepository } from "../domain/interfaces/repositories/IVariationVolumeRepository.js";

export class VariationVolumeService implements IVariationVolumeService {
  constructor(private variationVolumeRepository: IVariationVolumeRepository) {}

  getAll(): Promise<IVariationVolume[]> {
    return this.variationVolumeRepository.getAll();
  }

  getOneById(id: IdType): Promise<IVariationVolume> {
    return this.variationVolumeRepository.getOneById(id);
  }

  create(data: ICreateVariationVolume): Promise<IVariationVolume> {
    VariationVolume.validator.createValidator(data);

    return this.variationVolumeRepository.create(data);
  }

  updateOneById(
    id: IdType,
    data: Partial<IVariationVolume>,
  ): Promise<IVariationVolume> {
    VariationVolume.validator.updateValidator(data);

    return this.variationVolumeRepository.updateOneById(id, data);
  }

  deleteOneById(id: IdType): Promise<IVariationVolume> {
    return this.variationVolumeRepository.deleteOneById(id);
  }

  toDomainModel(variationVolumeDto: IVariationVolume): VariationVolume {
    return new VariationVolume(variationVolumeDto);
  }
}
