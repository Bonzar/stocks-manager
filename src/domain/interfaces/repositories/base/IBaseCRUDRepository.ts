export interface IBaseCRUDRepository<
  ModelType extends object,
  DBCreateInput extends object,
  DBUpdateInput extends object,
> {
  getAll(): Promise<ModelType[]>;

  getOneById(id: IdType): Promise<ModelType>;

  create(data: DBCreateInput): Promise<ModelType>;

  updateOneById(id: IdType, data: DBUpdateInput): Promise<ModelType>;

  deleteOneById(id: IdType): Promise<ModelType>;
}
