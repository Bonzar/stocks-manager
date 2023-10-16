import type {
  ICreateDryPowder,
  IDryPowder,
} from "../domain/models/DryPowder.js";
import { DryPowder } from "../domain/models/DryPowder.js";
import type { IDryPowderService } from "../domain/interfaces/services/IDryPowderService.js";
import type { IDryPowderRepository } from "../domain/interfaces/repositories/IDryPowderRepository.js";
import { IDryPowderValidator } from "../domain/interfaces/validators/modelsValidators/IDryPowderValidator.js";
import { DryPowderValidator } from "../domain/models/validators/modelValidators/DryPowderValidator.js";

export class DryPowderService implements IDryPowderService {
  constructor(
    private dryPowderRepository: IDryPowderRepository,
    private dryPowderValidator: IDryPowderValidator = new DryPowderValidator(),
  ) {}

  public getOneById(id: IdType): Promise<IDryPowder> {
    return this.dryPowderRepository.getOneById(id);
  }

  public getAll(): Promise<IDryPowder[]> {
    return this.dryPowderRepository.getAll();
  }

  public create(data: ICreateDryPowder): Promise<IDryPowder> {
    const validatedData = this.dryPowderValidator.createValidator(data);

    const { productId, ...otherData } = validatedData;

    return this.dryPowderRepository.create({
      ...otherData,
      product: { connect: { id: validatedData.productId } },
    });
  }

  public updateOneById(
    id: IdType,
    data: Partial<IDryPowder>,
  ): Promise<IDryPowder> {
    const validatedData = this.dryPowderValidator.updateValidator(data);

    return this.dryPowderRepository.updateOneById(id, validatedData);
  }

  public deleteOneById(id: IdType): Promise<IDryPowder> {
    return this.dryPowderRepository.deleteOneById(id);
  }

  public toDomainModel(dryPowderDto: IDryPowder): DryPowder {
    return new DryPowder(dryPowderDto);
  }
}
