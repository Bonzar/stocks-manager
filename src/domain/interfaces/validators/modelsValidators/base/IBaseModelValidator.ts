export type IBaseModelValidator<
  ModelType extends object,
  ModelCreateType extends object,
> = {
  createValidator(createData: OmitId<ModelCreateType>): OmitId<ModelType>;

  updateValidator<T extends OmitId<ModelType>>(
    updateData: Partial<T>,
  ): Partial<T>;

  idValidator<ModelWithId extends WithId<ModelType>>(
    id: ModelWithId["id"] | undefined,
  ): ModelWithId["id"];
};
