import { IBaseCRUDRepository } from "../../../domain/interfaces/repositories/base/IBaseCRUDRepository.js";
import { PrismaClient } from "@prisma/client";

interface IPrismaModel<TModel, DBCreateInput, DBUpdateInput> {
  findMany(): Promise<TModel[]>;

  findUniqueOrThrow(options: { where: { id: number } }): Promise<TModel>;

  create(data: { data: DBCreateInput }): Promise<TModel>;

  update(options: {
    where: { id: IdType };
    data: DBUpdateInput;
  }): Promise<TModel>;

  delete(options: { where: { id: number } }): Promise<TModel>;
}

export abstract class BaseCRUDRepository<
  TModel extends object,
  DBCreateInput extends object,
  DBUpdateInput extends object,
> implements IBaseCRUDRepository<TModel, DBCreateInput, DBUpdateInput>
{
  protected abstract prismaModel: IPrismaModel<
    TModel,
    DBCreateInput,
    DBUpdateInput
  >;

  constructor(protected prisma: PrismaClient) {}

  public getAll(): Promise<TModel[]> {
    return this.prismaModel.findMany();
  }

  public getOneById(id: IdType): Promise<TModel> {
    return this.prismaModel.findUniqueOrThrow({
      where: { id },
    });
  }

  public create(data: DBCreateInput): Promise<TModel> {
    return this.prismaModel.create({ data });
  }

  public updateOneById(id: IdType, data: DBUpdateInput): Promise<TModel> {
    return this.prismaModel.update({
      where: { id },
      data,
    });
  }

  public deleteOneById(id: IdType): Promise<TModel> {
    return this.prismaModel.delete({ where: { id } });
  }
}
