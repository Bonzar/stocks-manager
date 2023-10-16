import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { IVariationSetVariationsTypeValidatorData } from "../../../../domain/interfaces/validators/fieldsValidators/IVariationSetFieldsValidator.js";
import { IProductVariationRepository } from "../../../../domain/interfaces/repositories/IProductVariationRepository.js";
import { IVariationSet } from "../../../../domain/models/VariationSet.js";

export class ConnectedVariationsTypeValidator extends BaseFieldsValidator {
  constructor(private productVariationRepository: IProductVariationRepository) {
    super();

    this.validator = this.validator.bind(this);
  }

  public async validator(
    data: IVariationSetVariationsTypeValidatorData,
  ): Promise<IVariationSetVariationsTypeValidatorData> {
    const [parentVariationId, componentVariationId] = await Promise.all([
      this.checkParentVariationHaveSetType(data.parentVariationId),
      this.checkComponentVariationHaveSimpleType(data.componentVariationId),
    ]);

    return {
      parentVariationId,
      componentVariationId,
    };
  }

  public async checkComponentVariationHaveSimpleType(
    componentVariationId: IVariationSet["componentVariationId"] | undefined,
  ) {
    if (componentVariationId === undefined) {
      return componentVariationId;
    }

    const componentVariation =
      await this.productVariationRepository.getOneById(componentVariationId);

    if (componentVariation.variationType !== "SIMPLE") {
      throw new Error(
        "ComponentVariation in VariationSet should have SIMPLE type",
      );
    }

    return componentVariationId;
  }

  public async checkParentVariationHaveSetType(
    parentVariationId: IVariationSet["parentVariationId"] | undefined,
  ) {
    if (parentVariationId === undefined) {
      return parentVariationId;
    }

    const parentVariation =
      await this.productVariationRepository.getOneById(parentVariationId);

    if (parentVariation.variationType !== "SET") {
      throw new Error("ParentVariation in VariationSet should have SET type");
    }

    return parentVariationId;
  }
}
