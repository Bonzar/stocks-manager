export interface IBaseValidator<
  ModelType extends Record<"id", IdType>,
  ModelCreateType extends object,
> {
  createValidator(
    createData: Omit<ModelCreateType, "id">,
  ): Omit<ModelType, "id">;

  updateValidator(updateData: Partial<Omit<ModelType, "id">>): void;

  idValidator(id: ModelType["id"] | undefined): ModelType["id"];
}

export type ModelValidatorsCreator<T> = {
  [K in keyof T as `${K & string}Validator`]: (arg: T[K] | undefined) => T[K];
};
