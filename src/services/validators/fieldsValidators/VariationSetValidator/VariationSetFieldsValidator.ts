import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import {
  IVariationSetFieldsValidator,
  IVariationSetVariationsTypeValidatorData,
} from "../../../../domain/interfaces/validators/fieldsValidators/IVariationSetFieldsValidator.js";
import { IVariationSet } from "../../../../domain/models/VariationSet.js";
import { ConnectedVariationsTypeValidator } from "./ConnectedVariationsTypeValidator.js";
import { IProductVariationRepository } from "../../../../domain/interfaces/repositories/IProductVariationRepository.js";

export class VariationSetFieldsValidator
  extends BaseFieldsValidator
  implements IVariationSetFieldsValidator
{
  public connectedVariationsTypeValidator: (
    data: IVariationSetVariationsTypeValidatorData,
  ) => Promise<IVariationSetVariationsTypeValidatorData>;

  constructor(productVariationRepository: IProductVariationRepository) {
    super();

    this.connectedVariationsTypeValidator =
      new ConnectedVariationsTypeValidator(
        productVariationRepository,
      ).validator;
  }

  parentVariationIdValidator(
    parentVariationId: IVariationSet["parentVariationId"] | undefined,
  ) {
    this.assertsDefined(
      parentVariationId,
      "VariationSet parentVariationId cannot be empty",
    );

    return parentVariationId;
  }

  componentVariationIdValidator(
    componentVariationId: IVariationSet["componentVariationId"] | undefined,
  ) {
    this.assertsDefined(
      componentVariationId,
      "VariationSet componentVariationId cannot be empty",
    );

    return componentVariationId;
  }

  public idValidator(id: IVariationSet["id"] | undefined) {
    this.assertsDefined(id, "VariationSet id cannot be empty");

    return id;
  }
}
