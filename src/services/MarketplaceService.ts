import { IMarketplaceService } from "../domain/interfaces/services/IMarketplaceService.js";
import {
  ICreateMarketplace,
  IMarketplace,
  Marketplace,
} from "../domain/models/Marketplace.js";
import { IMarketplaceRepository } from "../domain/interfaces/repositories/IMarketplaceRepository.js";
import { IMarketplaceValidator } from "../domain/interfaces/validators/modelsValidators/IMarketplaceValidator.js";
import { MarketplaceValidator } from "./validators/modelValidators/MarketplaceValidator.js";

export class MarketplaceService implements IMarketplaceService {
  constructor(
    private marketplaceRepository: IMarketplaceRepository,
    private marketplaceValidator: IMarketplaceValidator = new MarketplaceValidator(),
  ) {}

  public getOneById(id: IdType): Promise<IMarketplace> {
    return this.marketplaceRepository.getOneById(id);
  }

  public getAll(): Promise<IMarketplace[]> {
    return this.marketplaceRepository.getAll();
  }

  public async create(data: ICreateMarketplace): Promise<IMarketplace> {
    const validatedData = await this.marketplaceValidator.createValidator(data);

    return this.marketplaceRepository.create(validatedData);
  }

  public async updateOneById(
    id: IdType,
    data: Partial<IMarketplace>,
  ): Promise<IMarketplace> {
    const validatedData = await this.marketplaceValidator.updateValidator(data);

    return this.marketplaceRepository.updateOneById(id, validatedData);
  }

  public deleteOneById(id: IdType): Promise<IMarketplace> {
    return this.marketplaceRepository.deleteOneById(id);
  }

  public async toDomainModel(
    marketplaceDto: IMarketplace,
  ): Promise<Marketplace> {
    const id = this.marketplaceValidator.idValidator(marketplaceDto.id);
    const validatedData =
      await this.marketplaceValidator.createValidator(marketplaceDto);

    return new Marketplace({ ...validatedData, id });
  }
}
