export interface IBaseCRUDService<
  Model extends object,
  ModelCreateInput extends object,
  ModelUpdateInput extends object,
> {
  getAll(): Promise<Model[]>;

  getOneById(id: IdType): Promise<Model>;

  create(data: ModelCreateInput): Promise<Model>;

  updateOneById(id: IdType, data: ModelUpdateInput): Promise<Model>;

  deleteOneById(id: IdType): Promise<Model>;
}
