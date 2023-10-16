import {
  IProductVariation,
  ProductVariation,
} from "../../../models/ProductVariation.js";
import { IBaseFieldsValidator } from "./base/IBaseFieldsValidator.js";

export type IVariationTypeVolumeIdConnectionValidatorData = {
  variationType?: ProductVariation["variationType"];
  variationVolumeId?: ProductVariation["variationVolumeId"];
};

export type IVariationTypeQuantityConnectionValidatorData = {
  variationType?: ProductVariation["variationType"];
  quantity?: ProductVariation["quantity"];
};

export type IProductVariationFieldsValidator =
  IBaseFieldsValidator<IProductVariation> & {
    variationTypeVolumeIdConnectionValidator(
      data: IVariationTypeVolumeIdConnectionValidatorData,
    ): IVariationTypeVolumeIdConnectionValidatorData;

    variationTypeQuantityConnectionValidator(
      data: IVariationTypeQuantityConnectionValidatorData,
    ): IVariationTypeQuantityConnectionValidatorData;
  };
