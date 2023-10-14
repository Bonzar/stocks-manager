import type {
  ICreateDryPowder,
  IDryPowder,
} from "../domain/models/DryPowder.js";
import { DryPowder } from "../domain/models/DryPowder.js";
import type { IDryPowderService } from "../domain/interfaces/services/IDryPowderService.js";
import type { IDryPowderRepository } from "../domain/interfaces/repositories/IDryPowderRepository.js";

export class DryPowderService implements IDryPowderService {
  constructor(private dryPowderRepository: IDryPowderRepository) {}

  public getOneById(id: IdType): Promise<IDryPowder> {
    return this.dryPowderRepository.getOneById(id);
  }

  public getAll(): Promise<IDryPowder[]> {
    return this.dryPowderRepository.getAll();
  }

  public create(data: ICreateDryPowder): Promise<IDryPowder> {
    DryPowder.validator.createValidator(data);

    return this.dryPowderRepository.create({
      ...data,
      product: { connect: { id: data.productId } },
    });
  }

  public updateOneById(
    id: IdType,
    data: Partial<IDryPowder>,
  ): Promise<IDryPowder> {
    DryPowder.validator.updateValidator(data);

    return this.dryPowderRepository.updateOneById(id, data);
  }

  public deleteOneById(id: IdType): Promise<IDryPowder> {
    return this.dryPowderRepository.deleteOneById(id);
  }

  public toDomainModel(dryPowderDto: IDryPowder): DryPowder {
    return new DryPowder(dryPowderDto);
  }
}
