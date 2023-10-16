import { BaseFieldsValidator } from "../base/BaseFieldsValidator.js";
import { IMarketplaceFieldsValidator } from "../../../../domain/interfaces/validators/fieldsValidators/IMarketplaceFieldsValidator.js";
import { IMarketplace } from "../../../../domain/models/Marketplace.js";

export class MarketplaceFieldsValidator
  extends BaseFieldsValidator
  implements IMarketplaceFieldsValidator
{
  idValidator(id: IMarketplace["id"] | undefined) {
    this.assertsDefined(id, "Marketplace id cannot be empty");

    return id;
  }

  coefficientValidator(coefficient: IMarketplace["coefficient"] | undefined) {
    this.assertsDefined(coefficient, "Marketplace coefficient cannot be empty");

    return coefficient;
  }

  haveWarehouseValidator(
    haveWarehouse: IMarketplace["haveWarehouse"] | undefined,
  ) {
    this.assertsDefined(
      haveWarehouse,
      "Marketplace haveWarehouse cannot be empty",
    );

    return haveWarehouse;
  }

  nameValidator(name: IMarketplace["name"] | undefined) {
    this.assertsDefined(name, "Marketplace name cannot be empty");

    return name;
  }
}
