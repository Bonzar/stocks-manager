import { IBaseFieldsValidator } from "./base/IBaseFieldsValidator.js";
import { IVariationSet } from "../../../models/VariationSet.js";

export type IVariationSetVariationsTypeValidatorData = {
  parentVariationId?: IVariationSet["parentVariationId"];
  componentVariationId?: IVariationSet["componentVariationId"];
};

interface IVariationSetAdditionalValidators {
  connectedVariationsTypeValidator(
    data: IVariationSetVariationsTypeValidatorData,
  ): Promise<IVariationSetVariationsTypeValidatorData>;
}

export type IVariationSetFieldsValidator = IBaseFieldsValidator<IVariationSet> &
  IVariationSetAdditionalValidators;
