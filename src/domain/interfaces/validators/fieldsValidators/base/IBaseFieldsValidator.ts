export type IBaseFieldsValidator<ModelType> = {
  [K in keyof ModelType as `${K & string}Validator`]: (
    arg: ModelType[K] | undefined,
  ) => ModelType[K];
};
