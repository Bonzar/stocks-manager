export type FieldsValidators<ModelType> = {
  [K in keyof ModelType as `${K & string}Validator`]: (
    arg: ModelType[K] | undefined,
  ) => ModelType[K];
};

export type IValidator<
  ModelType extends object,
  ModelCreateType extends object,
> = {
  createValidator(createData: OmitId<ModelCreateType>): OmitId<ModelType>;

  updateValidator<T extends OmitId<ModelType>>(
    updateData: Partial<T>,
  ): Partial<T>;
} & FieldsValidators<ModelType>;
