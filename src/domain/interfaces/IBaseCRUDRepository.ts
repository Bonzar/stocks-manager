export interface IBaseCRUDRepository<Model, ModelCreateInput> {
  getAll(): Promise<Model[]>;

  getOneById(id: IdType): Promise<Model>;

  create(data: ModelCreateInput): Promise<Model>;

  updateOneById(id: IdType, data: Omit<Partial<Model>, "id">): Promise<Model>;

  deleteOneById(id: IdType): Promise<Model>;
}
