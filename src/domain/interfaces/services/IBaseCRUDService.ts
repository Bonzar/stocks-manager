export interface IBaseCRUDService<
  Model extends object,
  ModelType extends object,
  ModelCreateType extends object,
> {
  getAll(): Promise<ModelType[]>;

  getOneById(id: IdType): Promise<ModelType>;

  create(data: ModelCreateType): Promise<ModelType>;

  updateOneById(id: IdType, data: Partial<ModelType>): Promise<ModelType>;

  deleteOneById(id: IdType): Promise<ModelType>;

  toDomainModel(dto: ModelType): Model;
}
