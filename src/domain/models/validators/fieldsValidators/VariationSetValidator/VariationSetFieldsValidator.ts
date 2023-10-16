import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { IVariationSetFieldsValidator } from "../../../../interfaces/validators/fieldsValidators/IVariationSetFieldsValidator.js";
import { IVariationSet } from "../../../VariationSet.js";

export class VariationSetFieldsValidator
  extends BaseFieldsValidator
  implements IVariationSetFieldsValidator
{
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
