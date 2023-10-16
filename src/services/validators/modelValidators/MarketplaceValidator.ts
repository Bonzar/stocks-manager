import { IMarketplaceValidator } from "../../../domain/interfaces/validators/modelsValidators/IMarketplaceValidator.js";
import {
  ICreateMarketplace,
  IMarketplace,
} from "../../../domain/models/Marketplace.js";
import { IMarketplaceFieldsValidator } from "../../../domain/interfaces/validators/fieldsValidators/IMarketplaceFieldsValidator.js";
import { MarketplaceFieldsValidator } from "../fieldsValidators/MarketplaceFieldsValidators/MarketplaceFieldsValidator.js";

export class MarketplaceValidator implements IMarketplaceValidator {
  private fieldsValidator: IMarketplaceFieldsValidator =
    new MarketplaceFieldsValidator();

  public async createValidator({
    name,
    coefficient,
    haveWarehouse,
  }: OmitId<ICreateMarketplace>): Promise<OmitId<IMarketplace>> {
    return {
      name: this.fieldsValidator.nameValidator(name),
      coefficient: this.fieldsValidator.coefficientValidator(coefficient),
      haveWarehouse: this.fieldsValidator.haveWarehouseValidator(haveWarehouse),
    };
  }

  public async updateValidator<T extends OmitId<IMarketplace>>({
    haveWarehouse,
    coefficient,
    name,
  }: Partial<T>): Promise<Partial<T>> {
    const validationData: Partial<T> = {};

    if (haveWarehouse !== undefined) {
      validationData.haveWarehouse =
        this.fieldsValidator.haveWarehouseValidator(haveWarehouse);
    }

    if (coefficient !== undefined) {
      validationData.coefficient =
        this.fieldsValidator.coefficientValidator(coefficient);
    }

    if (name !== undefined) {
      validationData.name = this.fieldsValidator.nameValidator(name);
    }

    return validationData;
  }

  public idValidator(id: IMarketplace["id"] | undefined) {
    return this.fieldsValidator.idValidator(id);
  }
}
