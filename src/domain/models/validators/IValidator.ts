type FieldsValidators<T> = {
  [K in keyof T as `${K & string}Validator`]: (arg: T[K] | undefined) => T[K];
};

export type IValidator<
  ModelType extends Record<string, unknown>,
  ModelCreateType extends Record<string, unknown>,
> = {
  createValidator(createData: OmitId<ModelCreateType>): OmitId<ModelType>;

  updateValidator(
    updateData: Partial<OmitId<ModelType>>,
  ): Partial<OmitId<ModelType>>;
} & FieldsValidators<ModelType>;
