import { IVariationSetValidator } from "../../../domain/interfaces/validators/modelsValidators/IVariationSetValidator.js";
import { IVariationSetFieldsValidator } from "../../../domain/interfaces/validators/fieldsValidators/IVariationSetFieldsValidator.js";
import { VariationSetFieldsValidator } from "../fieldsValidators/VariationSetValidator/VariationSetFieldsValidator.js";
import {
  ICreateVariationSet,
  IVariationSet,
} from "../../../domain/models/VariationSet.js";
import { IProductVariationRepository } from "../../../domain/interfaces/repositories/IProductVariationRepository.js";

export class VariationSetValidator implements IVariationSetValidator {
  private fieldsValidator: IVariationSetFieldsValidator;

  constructor(productVariationRepository: IProductVariationRepository) {
    this.fieldsValidator = new VariationSetFieldsValidator(
      productVariationRepository,
    );
  }

  public async createValidator(
    createData: OmitId<ICreateVariationSet>,
  ): Promise<OmitId<IVariationSet>> {
    let validatedData: Partial<OmitId<IVariationSet>> = createData;

    validatedData = {
      ...validatedData,
      ...(await this.fieldsValidator.connectedVariationsTypeValidator(
        createData,
      )),
    };

    return {
      parentVariationId: this.fieldsValidator.parentVariationIdValidator(
        validatedData.parentVariationId,
      ),
      componentVariationId: this.fieldsValidator.componentVariationIdValidator(
        validatedData.componentVariationId,
      ),
    };
  }

  public async updateValidator<T extends OmitId<IVariationSet>>({
    parentVariationId,
    componentVariationId,
  }: Partial<T>): Promise<Partial<T>> {
    let validatedData: Partial<T> = {};

    if (parentVariationId !== undefined) {
      validatedData.parentVariationId =
        this.fieldsValidator.parentVariationIdValidator(parentVariationId);
    }

    if (componentVariationId !== undefined) {
      validatedData.componentVariationId =
        this.fieldsValidator.componentVariationIdValidator(
          componentVariationId,
        );
    }

    validatedData = {
      ...validatedData,
      ...(await this.fieldsValidator.connectedVariationsTypeValidator(
        validatedData,
      )),
    };

    return validatedData;
  }

  public idValidator(id: IVariationSet["id"] | undefined) {
    return this.fieldsValidator.idValidator(id);
  }
}
