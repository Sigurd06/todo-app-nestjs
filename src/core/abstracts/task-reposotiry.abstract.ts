import { IGenericRepository } from './generic-repository.abstract';

export abstract class ITaskRepository<T> extends IGenericRepository<T> {
  public abstract findAllPaginate(
    page: number,
    quantity: number,
  ): Promise<[T[], number]>;
}
