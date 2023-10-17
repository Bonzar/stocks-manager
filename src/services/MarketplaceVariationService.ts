import { IMarketplaceVariationService } from "../domain/interfaces/services/IMarketplaceVariationService.js";
import {
  ICreteMarketplaceVariation,
  IMarketplaceVariation,
  MarketplaceVariation,
} from "../domain/models/MarketplaceVariation.js";
import { IMarketplaceVariationRepository } from "../domain/interfaces/repositories/IMarketplaceVariationRepository.js";
import { IMarketplaceVariationValidator } from "../domain/interfaces/validators/modelsValidators/IMarketplaceVariationValidator.js";
import { MarketplaceVariationValidator } from "./validators/modelValidators/MarketplaceVariationValidator.js";

export class MarketplaceVariationService
  implements IMarketplaceVariationService
{
  constructor(
    private marketplaceVariationRepository: IMarketplaceVariationRepository,
    private marketplaceVariationValidator: IMarketplaceVariationValidator = new MarketplaceVariationValidator(),
  ) {}

  public getOneById(id: IdType): Promise<IMarketplaceVariation> {
    return this.marketplaceVariationRepository.getOneById(id);
  }

  public getAll(): Promise<IMarketplaceVariation[]> {
    return this.marketplaceVariationRepository.getAll();
  }

  public async create(
    data: ICreteMarketplaceVariation,
  ): Promise<IMarketplaceVariation> {
    const { marketplaceId, productVariationId, ...validatedData } =
      await this.marketplaceVariationValidator.createValidator(data);

    return this.marketplaceVariationRepository.create({
      ...validatedData,
      marketplace: { connect: { id: marketplaceId } },
      productVariation: { connect: { id: productVariationId } },
    });
  }

  public async updateOneById(
    id: IdType,
    data: Partial<IMarketplaceVariation>,
  ): Promise<IMarketplaceVariation> {
    const { marketplaceId, productVariationId, ...validatedData } =
      await this.marketplaceVariationValidator.updateValidator(data);

    return this.marketplaceVariationRepository.updateOneById(id, {
      ...validatedData,
      marketplace:
        marketplaceId === undefined
          ? undefined
          : { connect: { id: marketplaceId } },
      productVariation:
        productVariationId === undefined
          ? undefined
          : { connect: { id: productVariationId } },
    });
  }

  public deleteOneById(id: IdType): Promise<IMarketplaceVariation> {
    return this.marketplaceVariationRepository.deleteOneById(id);
  }

  public async toDomainModel(
    marketplaceVariationDto: IMarketplaceVariation,
  ): Promise<MarketplaceVariation> {
    const id = this.marketplaceVariationValidator.idValidator(
      marketplaceVariationDto.id,
    );

    const validatedData =
      await this.marketplaceVariationValidator.createValidator(
        marketplaceVariationDto,
      );

    return new MarketplaceVariation({ ...validatedData, id });
  }
}
