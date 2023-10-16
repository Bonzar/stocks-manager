import { IProductVariationValidator } from "../../../domain/interfaces/validators/modelsValidators/IProductVariationValidator.js";
import { IProductVariationFieldsValidator } from "../../../domain/interfaces/validators/fieldsValidators/IProductVariationFieldsValidator.js";
import { ProductVariationFieldsValidator } from "../fieldsValidators/ProductVariationFieldsValidators/ProductVariationFieldsValidator.js";
import {
  ICreateProductVariation,
  IProductVariation,
} from "../../../domain/models/ProductVariation.js";

export class ProductVariationValidator implements IProductVariationValidator {
  private fieldsValidator: IProductVariationFieldsValidator =
    new ProductVariationFieldsValidator();

  public async createValidator(createData: OmitId<ICreateProductVariation>) {
    let validatedData: Partial<OmitId<IProductVariation>> = createData;

    validatedData = {
      ...validatedData,
      ...this.fieldsValidator.variationTypeVolumeIdConnectionValidator(
        validatedData,
      ),
    };

    validatedData = {
      ...validatedData,
      ...this.fieldsValidator.variationTypeQuantityConnectionValidator(
        validatedData,
      ),
    };

    return {
      description: this.fieldsValidator.descriptionValidator(
        validatedData.description ?? createData.description,
      ),
      productId: this.fieldsValidator.productIdValidator(
        validatedData.productId ?? createData.productId,
      ),
      quantity: this.fieldsValidator.quantityValidator(
        validatedData.quantity ?? createData.quantity,
      ),
      variationType: this.fieldsValidator.variationTypeValidator(
        validatedData.variationType ?? createData.variationType,
      ),
      variationVolumeId: this.fieldsValidator.variationVolumeIdValidator(
        validatedData.variationVolumeId ?? createData.variationVolumeId,
      ),
    };
  }

  public async updateValidator<T extends OmitId<IProductVariation>>({
    productId,
    variationType,
    variationVolumeId,
    description,
    quantity,
  }: Partial<T>): Promise<Partial<T>> {
    let validatedData: Partial<T> = {};

    if (variationVolumeId !== undefined) {
      validatedData.variationVolumeId =
        this.fieldsValidator.variationVolumeIdValidator(variationVolumeId);
    }

    if (variationType !== undefined) {
      validatedData.variationType =
        this.fieldsValidator.variationTypeValidator(variationType);
    }

    if (description !== undefined) {
      validatedData.description =
        this.fieldsValidator.descriptionValidator(description);
    }

    if (productId !== undefined) {
      validatedData.productId =
        this.fieldsValidator.productIdValidator(productId);
    }

    if (quantity !== undefined) {
      validatedData.quantity = this.fieldsValidator.quantityValidator(quantity);
    }

    validatedData = {
      ...validatedData,
      ...this.fieldsValidator.variationTypeVolumeIdConnectionValidator(
        validatedData,
      ),
    };

    validatedData = {
      ...validatedData,
      ...this.fieldsValidator.variationTypeQuantityConnectionValidator(
        validatedData,
      ),
    };

    return validatedData;
  }

  public idValidator(id: IProductVariation["id"] | undefined) {
    return this.fieldsValidator.idValidator(id);
  }
}
