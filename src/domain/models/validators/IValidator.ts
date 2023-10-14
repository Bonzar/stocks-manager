type FieldsValidators<T> = {
  [K in keyof T as `${K & string}Validator`]: (arg: T[K] | undefined) => T[K];
};

export type IValidator<
  ModelType extends Record<string, unknown>,
  ModelCreateType extends Record<string, unknown>,
> = {
  createValidator(createData: OmitId<ModelCreateType>): OmitId<ModelType>;

  updateValidator<T extends OmitId<ModelType>>(
    updateData: Partial<T>,
  ): Partial<T>;
} & FieldsValidators<ModelType>;
