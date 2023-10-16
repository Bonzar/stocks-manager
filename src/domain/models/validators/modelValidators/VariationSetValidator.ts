import { IVariationSetValidator } from "../../../interfaces/validators/modelsValidators/IVariationSetValidator.js";
import { IVariationSetFieldsValidator } from "../../../interfaces/validators/fieldsValidators/IVariationSetFieldsValidator.js";
import { VariationSetFieldsValidator } from "../fieldsValidators/VariationSetValidator/VariationSetFieldsValidator.js";
import { ICreateVariationSet, IVariationSet } from "../../VariationSet.js";

export class VariationSetValidator implements IVariationSetValidator {
  private fieldsValidator: IVariationSetFieldsValidator =
    new VariationSetFieldsValidator();

  createValidator({
    parentVariationId,
    componentVariationId,
  }: OmitId<ICreateVariationSet>): OmitId<IVariationSet> {
    return {
      parentVariationId:
        this.fieldsValidator.parentVariationIdValidator(parentVariationId),
      componentVariationId:
        this.fieldsValidator.componentVariationIdValidator(
          componentVariationId,
        ),
    };
  }

  updateValidator<T extends OmitId<IVariationSet>>({
    parentVariationId,
    componentVariationId,
  }: Partial<T>): Partial<T> {
    const validationData: Partial<T> = {};

    if (parentVariationId !== undefined) {
      validationData.parentVariationId =
        this.fieldsValidator.parentVariationIdValidator(parentVariationId);
    }
    if (componentVariationId !== undefined) {
      validationData.componentVariationId =
        this.fieldsValidator.componentVariationIdValidator(
          componentVariationId,
        );
    }

    return validationData;
  }

  idValidator(id: IVariationSet["id"] | undefined) {
    return this.fieldsValidator.idValidator(id);
  }
}
